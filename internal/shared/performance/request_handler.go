package performance

import (
	"context"
	"net/http"
	"sync"
	"time"

	"im/internal/shared/logger"
)

// RequestHandler 请求处理器（集成限流、超时、CORS）
type RequestHandler struct {
	rateLimiter *RateLimiter
	logger      *logger.Logger
}

// RateLimiter 限流器
type RateLimiter struct {
	requests map[string][]time.Time
	mu       sync.RWMutex
	limit    int
	window   time.Duration
}

// NewRateLimiter 创建限流器
func NewRateLimiter(limit int, window time.Duration) *RateLimiter {
	return &RateLimiter{
		requests: make(map[string][]time.Time),
		limit:    limit,
		window:   window,
	}
}

// Allow 检查是否允许请求
func (rl *RateLimiter) Allow(ip string) bool {
	rl.mu.Lock()
	defer rl.mu.Unlock()

	now := time.Now()
	cutoff := now.Add(-rl.window)

	// 清理过期请求
	if times, exists := rl.requests[ip]; exists {
		var validTimes []time.Time
		for _, t := range times {
			if t.After(cutoff) {
				validTimes = append(validTimes, t)
			}
		}
		rl.requests[ip] = validTimes
	}

	// 检查是否超过限制
	if len(rl.requests[ip]) >= rl.limit {
		return false
	}

	// 记录当前请求
	rl.requests[ip] = append(rl.requests[ip], now)
	return true
}

// NewRequestHandler 创建请求处理器
func NewRequestHandler(logger *logger.Logger) *RequestHandler {
	return &RequestHandler{
		rateLimiter: NewRateLimiter(100, time.Minute), // 100 req/min
		logger:      logger,
	}
}

// HandleRequest 处理请求（集成限流、超时、CORS）
func (rh *RequestHandler) HandleRequest(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// 1. 限流检查
		ip := r.RemoteAddr
		if !rh.rateLimiter.Allow(ip) {
			rh.logger.Warnf("请求被限流: %s", ip)
			http.Error(w, "Too Many Requests", http.StatusTooManyRequests)
			return
		}

		// 2. CORS处理
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Max-Age", "86400") // 24小时缓存

		// 预检请求优化
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// 3. 超时控制
		ctx, cancel := context.WithTimeout(r.Context(), 30*time.Second)
		defer cancel()

		r = r.WithContext(ctx)

		// 4. 执行处理器
		handler(w, r)
	}
}

// SetRateLimit 设置限流参数
func (rh *RequestHandler) SetRateLimit(limit int, window time.Duration) {
	rh.rateLimiter = NewRateLimiter(limit, window)
}
