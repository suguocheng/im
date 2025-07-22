package main

import (
	"bytes"
	"fmt"
	"io"
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

func showMessageMenu() {
	fmt.Println("\n=== 消息中心 ===")
	count := 0
	for {
		select {
		case msg := <-notifyChan:
			fmt.Println(msg)
			count++
		default:
			if count == 0 {
				fmt.Println("暂无新消息")
			}
			// TODO: 可扩展为显示历史消息、已读/未读等
			readLine("按回车返回主菜单...", nil)
			return
		}
	}
}

// 新增：群聊 WebSocket 聊天函数
func WsChatWithGroup(groupId, groupName string) {
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

	loginMsg := &pb.IMMessage{Type: "login", Token: savedToken}
	b, _ := proto.Marshal(loginMsg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("WebSocket登录失败:", err)
		return
	}

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

	fmt.Printf("已进入群聊 [%s]\n", groupName)
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
			} else if im.GroupId == groupId && im.From != savedUID { // 监听属于该群组，且不是自己发送的消息
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
			if strings.HasPrefix(text, "/") {
				handleCommand(text, c, groupId, "group", quit) // 修改为调用通用命令处理器
				continue
			}
			text = replaceEmojis(text)
			msg := &pb.IMMessage{
				Type:      "chat", // 文本消息类型统一为 chat
				From:      savedUID,
				GroupId:   groupId, // 目标为群组ID
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

func WsChatWithFriend(friendUid string) {
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

	loginMsg := &pb.IMMessage{Type: "login", Token: savedToken}
	b, _ := proto.Marshal(loginMsg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("WebSocket登录失败:", err)
		return
	}

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
			} else if im.To == savedUID && im.From == friendUid { // 监听发送给自己且来自当前好友的消息
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
			if strings.HasPrefix(text, "/") {
				handleCommand(text, c, friendUid, "private", quit) // 修改为调用通用命令处理器
				continue
			}
			text = replaceEmojis(text)
			msg := &pb.IMMessage{
				Type:      "chat", // 文本消息类型统一为 chat
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

// 处理特殊命令（重构为通用）
func handleCommand(cmd string, c *websocket.Conn, targetId, chatType string, quit chan struct{}) {
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
		sendImage(parts[1], c, targetId, chatType)
	case "/file":
		if len(parts) < 2 {
			fmt.Println("用法: /file <文件路径>")
			return
		}
		sendFile(parts[1], c, targetId, chatType)
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

// 发送图片（重构为通用）
func sendImage(filePath string, c *websocket.Conn, targetId, chatType string) {
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
		Content:   fileInfo.Url,
		Extra:     fileInfo.OriginalName,
		Timestamp: time.Now().Unix(),
		Filename:  fileInfo.Filename,
		Filesize:  fileInfo.Size,
		MimeType:  "image/" + strings.ToLower(filepath.Ext(fileInfo.OriginalName)[1:]),
	}

	if chatType == "group" {
		msg.GroupId = targetId
	} else {
		msg.To = targetId
	}

	b, _ := proto.Marshal(msg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("发送图片消息失败:", err)
		return
	}

	fmt.Printf("图片已发送: %s\n", fileInfo.OriginalName)
}

// 发送文件（重构为通用）
func sendFile(filePath string, c *websocket.Conn, targetId, chatType string) {
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
		Content:   fileInfo.Url,
		Extra:     fmt.Sprintf("%s (%s)", fileInfo.OriginalName, formatFileSize(fileInfo.Size)),
		Timestamp: time.Now().Unix(),
		Filename:  fileInfo.Filename,
		Filesize:  fileInfo.Size,
		MimeType:  getMimeType(fileInfo.OriginalName),
	}

	if chatType == "group" {
		msg.GroupId = targetId
	} else {
		msg.To = targetId
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

	respBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("读取响应体失败: %v", err)
	}

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

// 获取群聊成员显示名（优先群昵称，没有则用户名）
func getGroupDisplayName(groupId, uid string) string {
	// 自己不用查
	if uid == savedUID {
		return "我"
	}
	memberInfoReq := &pb.GroupMemberInfoReq{
		GroupId: groupId,
		Uid:     uid,
	}
	resp, err := sendRequest("/group_member_info", memberInfoReq)
	if err != nil {
		return uid // 查不到就显示UID
	}
	var memberInfo pb.GroupMemberInfoResp
	if err := proto.Unmarshal(resp.Data, &memberInfo); err != nil {
		return uid
	}
	if memberInfo.Nickname != "" {
		return memberInfo.Nickname
	}
	if memberInfo.Username != "" {
		return memberInfo.Username
	}
	return uid
}

// 获取好友显示名（优先备注，没有则用户名）
func getFriendDisplayName(uid string) string {
	if uid == savedUID {
		return "我"
	}
	friendInfoReq := &pb.FriendInfoReq{
		Uid:       savedUID,
		FriendUid: uid,
	}
	resp, err := sendRequest("/friend_info", friendInfoReq)
	if err != nil {
		return uid
	}
	var friendInfo pb.FriendInfoResp
	if err := proto.Unmarshal(resp.Data, &friendInfo); err != nil {
		return uid
	}
	if friendInfo.Remark != "" {
		return friendInfo.Remark
	}
	if friendInfo.Username != "" {
		return friendInfo.Username
	}
	return uid
}

// 显示消息
func displayMessage(msg *pb.IMMessage) {
	var displayName string
	if msg.GroupId != "" { // 群聊
		displayName = getGroupDisplayName(msg.GroupId, msg.From)
	} else { // 单聊
		displayName = getFriendDisplayName(msg.From)
	}
	switch msg.Type {
	case "chat":
		fmt.Printf("%s: %s\n", displayName, msg.Content)
	case "emoji":
		fmt.Printf("%s: %s\n", displayName, msg.Content)
	case "image":
		fmt.Printf("%s: [图片] %s\n", displayName, msg.Extra)
		fmt.Printf("  下载链接: http://localhost:8081%s\n", msg.Content)
	case "file":
		fmt.Printf("%s: [文件] %s\n", displayName, msg.Extra)
		fmt.Printf("  下载链接: http://localhost:8081%s\n", msg.Content)
	default:
		fmt.Printf("%s: [%s] %s\n", displayName, msg.Type, msg.Content)
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
