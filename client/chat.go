package main

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	pb "im/core/protocol/pb"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

// 表情映射表
var emojiMap = map[string]string{
	":smile:":      "😊",
	":laugh:":      "😄",
	":cry:":        "😢",
	":angry:":      "😠",
	":heart:":      "❤️",
	":thumbsup:":   "👍",
	":thumbsdown:": "👎",
	":ok:":         "👌",
	":clap:":       "👏",
	":wave:":       "👋",
	":pray:":       "🙏",
	":fire:":       "🔥",
	":star:":       "⭐",
	":moon:":       "🌙",
	":sun:":        "☀️",
	":rainbow:":    "🌈",
	":coffee:":     "☕",
	":beer:":       "🍺",
	":pizza:":      "🍕",
	":cake:":       "🎂",
}

// 扩展的私聊功能
func wsChatWithFriendExtended(_ interface{}, friendUid string) {
	c, _, err := websocket.DefaultDialer.Dial("ws://127.0.0.1:8090/ws", nil)
	if err != nil {
		fmt.Println("WebSocket 连接失败:", err)
		return
	}
	defer c.Close()

	if savedToken == "" {
		fmt.Println("请先登录获取token")
		return
	}

	// 先进行WebSocket登录
	loginMsg := &pb.IMMessage{Type: "login", Token: savedToken}
	b, _ := proto.Marshal(loginMsg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("WebSocket登录失败:", err)
		return
	}

	// 等待登录响应
	_, loginResp, err := c.ReadMessage()
	if err != nil {
		fmt.Println("读取登录响应失败:", err)
		return
	}
	var loginResponse pb.IMMessage
	if err := proto.Unmarshal(loginResp, &loginResponse); err != nil {
		fmt.Println("解析登录响应失败:", err)
		return
	}
	if loginResponse.Type == "error" {
		fmt.Println("WebSocket登录失败:", loginResponse.Content)
		return
	}

	fmt.Printf("已进入与 %s 的私聊\n", friendUid)
	fmt.Println("支持的命令:")
	fmt.Println("  /emoji - 查看可用表情")
	fmt.Println("  /image <文件路径> - 发送图片")
	fmt.Println("  /file <文件路径> - 发送文件")
	fmt.Println("  /exit - 退出聊天")

	quit := make(chan struct{})
	go func() {
		for {
			_, msg, err := c.ReadMessage()
			if err != nil {
				select {
				case <-quit:
					// 正常退出，不提示
				default:
					fmt.Println("服务器断开：", err)
				}
				return
			}
			var im pb.IMMessage
			err = proto.Unmarshal(msg, &im)
			if err != nil {
				fmt.Println("收到非Protobuf消息：", string(msg))
			} else if im.Type == "chat" && im.From == friendUid {
				displayMessage(&im)
			} else if im.Type == "error" {
				fmt.Println("错误消息：", im.Content)
			}
		}
	}()

	for {
		select {
		case <-quit:
			return
		default:
			text := readLine("", nil)
			if text == "/exit" {
				close(quit)
				return
			}
			if text == "" {
				continue
			}

			// 处理特殊命令
			if strings.HasPrefix(text, "/") {
				handleCommand(text, c, friendUid, quit)
				continue
			}

			// 处理表情
			text = replaceEmojis(text)

			// 发送普通文本消息
			msg := &pb.IMMessage{
				Type:      "chat",
				From:      savedUID,
				To:        friendUid,
				Content:   text,
				Timestamp: time.Now().Unix(),
			}
			b, _ := proto.Marshal(msg)
			if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
				fmt.Println("发送消息失败:", err)
				return
			}
		}
	}
}

// 处理特殊命令
func handleCommand(cmd string, c *websocket.Conn, friendUid string, quit chan struct{}) {
	parts := strings.Fields(cmd)
	if len(parts) == 0 {
		return
	}

	switch parts[0] {
	case "/emoji":
		showEmojiList()
	case "/image":
		if len(parts) < 2 {
			fmt.Println("用法: /image <文件路径>")
			return
		}
		sendImage(parts[1], c, friendUid)
	case "/file":
		if len(parts) < 2 {
			fmt.Println("用法: /file <文件路径>")
			return
		}
		sendFile(parts[1], c, friendUid)
	default:
		fmt.Println("未知命令:", parts[0])
	}
}

// 显示表情列表
func showEmojiList() {
	fmt.Println("可用表情:")
	for code, emoji := range emojiMap {
		fmt.Printf("  %s = %s\n", code, emoji)
	}
}

// 替换表情代码
func replaceEmojis(text string) string {
	for code, emoji := range emojiMap {
		text = strings.ReplaceAll(text, code, emoji)
	}
	return text
}

// 发送图片
func sendImage(filePath string, c *websocket.Conn, friendUid string) {
	// 上传文件
	fileInfo, err := uploadFile(filePath)
	if err != nil {
		fmt.Println("上传图片失败:", err)
		return
	}

	// 发送图片消息
	msg := &pb.IMMessage{
		Type:      "image",
		From:      savedUID,
		To:        friendUid,
		Content:   fileInfo.Url,
		Extra:     fileInfo.OriginalName,
		Timestamp: time.Now().Unix(),
		Filename:  fileInfo.Filename,
		Filesize:  fileInfo.Size,
		MimeType:  "image/" + strings.ToLower(filepath.Ext(fileInfo.OriginalName)[1:]),
	}

	b, _ := proto.Marshal(msg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("发送图片消息失败:", err)
		return
	}

	fmt.Printf("图片已发送: %s\n", fileInfo.OriginalName)
}

// 发送文件
func sendFile(filePath string, c *websocket.Conn, friendUid string) {
	// 上传文件
	fileInfo, err := uploadFile(filePath)
	if err != nil {
		fmt.Println("上传文件失败:", err)
		return
	}

	// 发送文件消息
	msg := &pb.IMMessage{
		Type:      "file",
		From:      savedUID,
		To:        friendUid,
		Content:   fileInfo.Url,
		Extra:     fmt.Sprintf("%s (%s)", fileInfo.OriginalName, formatFileSize(fileInfo.Size)),
		Timestamp: time.Now().Unix(),
		Filename:  fileInfo.Filename,
		Filesize:  fileInfo.Size,
		MimeType:  getMimeType(fileInfo.OriginalName),
	}

	b, _ := proto.Marshal(msg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("发送文件消息失败:", err)
		return
	}

	fmt.Printf("文件已发送: %s (%s)\n", fileInfo.OriginalName, formatFileSize(fileInfo.Size))
}

// 上传文件
func uploadFile(filePath string) (*pb.FileInfo, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, fmt.Errorf("打开文件失败: %v", err)
	}
	defer file.Close()

	// 创建multipart表单
	var buf bytes.Buffer
	writer := multipart.NewWriter(&buf)

	part, err := writer.CreateFormFile("file", filepath.Base(filePath))
	if err != nil {
		return nil, fmt.Errorf("创建表单失败: %v", err)
	}

	_, err = io.Copy(part, file)
	if err != nil {
		return nil, fmt.Errorf("复制文件失败: %v", err)
	}

	writer.Close()

	// 发送上传请求
	resp, err := http.Post("http://localhost:8081/upload", writer.FormDataContentType(), &buf)
	if err != nil {
		return nil, fmt.Errorf("上传请求失败: %v", err)
	}
	defer resp.Body.Close()

	respBytes, _ := ioutil.ReadAll(resp.Body)
	var apiResp pb.APIResp
	if err := proto.Unmarshal(respBytes, &apiResp); err != nil {
		return nil, fmt.Errorf("解析响应失败: %v", err)
	}

	if apiResp.Code != 0 {
		return nil, fmt.Errorf("上传失败: %s", apiResp.Msg)
	}

	var fileInfo pb.FileInfo
	if err := proto.Unmarshal(apiResp.Data, &fileInfo); err != nil {
		return nil, fmt.Errorf("解析文件信息失败: %v", err)
	}

	return &fileInfo, nil
}

// 显示消息
func displayMessage(msg *pb.IMMessage) {
	switch msg.Type {
	case "chat":
		fmt.Printf("%s: %s\n", msg.From, msg.Content)
	case "emoji":
		fmt.Printf("%s: %s\n", msg.From, msg.Content)
	case "image":
		fmt.Printf("%s: [图片] %s\n", msg.From, msg.Extra)
		fmt.Printf("  下载链接: http://localhost:8081%s\n", msg.Content)
	case "file":
		fmt.Printf("%s: [文件] %s\n", msg.From, msg.Extra)
		fmt.Printf("  下载链接: http://localhost:8081%s\n", msg.Content)
	default:
		fmt.Printf("%s: [%s] %s\n", msg.From, msg.Type, msg.Content)
	}
}

// 格式化文件大小
func formatFileSize(size int64) string {
	const unit = 1024
	if size < unit {
		return fmt.Sprintf("%d B", size)
	}
	div, exp := int64(unit), 0
	for n := size / unit; n >= unit; n /= unit {
		div *= unit
		exp++
	}
	return fmt.Sprintf("%.1f %cB", float64(size)/float64(div), "KMGTPE"[exp])
}

// 获取MIME类型
func getMimeType(filename string) string {
	ext := strings.ToLower(filepath.Ext(filename))
	switch ext {
	case ".jpg", ".jpeg":
		return "image/jpeg"
	case ".png":
		return "image/png"
	case ".gif":
		return "image/gif"
	case ".pdf":
		return "application/pdf"
	case ".txt":
		return "text/plain"
	case ".zip":
		return "application/zip"
	default:
		return "application/octet-stream"
	}
}
