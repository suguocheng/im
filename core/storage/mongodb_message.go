package storage

import (
	"context"
	"time"

	pb "im/core/protocol/pb"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// MongoDBMessageStorage MongoDB消息存储
type MongoDBMessageStorage struct {
	client   *mongo.Client
	database *mongo.Database
}

// MessageDocument MongoDB消息文档结构
type MessageDocument struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	Type         string             `bson:"type"`
	From         string             `bson:"from"`
	FromUsername string             `bson:"from_username"`
	To           string             `bson:"to,omitempty"`
	GroupID      string             `bson:"group_id,omitempty"`
	Content      string             `bson:"content"`
	Timestamp    int64              `bson:"timestamp"`
	Extra        string             `bson:"extra,omitempty"`
	Filename     string             `bson:"filename,omitempty"`
	Filesize     int64              `bson:"filesize,omitempty"`
	MimeType     string             `bson:"mime_type,omitempty"`
	CreatedAt    time.Time          `bson:"created_at"`
}

// NewMongoDBMessageStorage 初始化MongoDB消息存储
func NewMongoDBMessageStorage(uri, databaseName string) (*MongoDBMessageStorage, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		return nil, err
	}

	// 测试连接
	err = client.Ping(ctx, nil)
	if err != nil {
		return nil, err
	}

	database := client.Database(databaseName)

	return &MongoDBMessageStorage{
		client:   client,
		database: database,
	}, nil
}

// StoreMessage 存储消息到MongoDB
func (m *MongoDBMessageStorage) StoreMessage(msg *pb.IMMessage) error {
	collection := m.database.Collection("messages")

	doc := MessageDocument{
		Type:         msg.Type,
		From:         msg.From,
		FromUsername: msg.FromUsername,
		To:           msg.To,
		GroupID:      msg.GroupId,
		Content:      msg.Content,
		Timestamp:    msg.Timestamp,
		Extra:        msg.Extra,
		Filename:     msg.Filename,
		Filesize:     msg.Filesize,
		MimeType:     msg.MimeType,
		CreatedAt:    time.Now(),
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err := collection.InsertOne(ctx, doc)
	return err
}

// GetPrivateMessages 获取私聊消息
func (m *MongoDBMessageStorage) GetPrivateMessages(uid1, uid2 string, limit int64) ([]*pb.IMMessage, error) {
	collection := m.database.Collection("messages")

	// 构建查询条件：查找包含这两个用户的消息
	filter := bson.M{
		"$or": []bson.M{
			{"from": uid1, "to": uid2},
			{"from": uid2, "to": uid1},
		},
		"group_id": bson.M{"$exists": false}, // 确保不是群聊消息
	}

	opts := options.Find().
		SetSort(bson.D{{Key: "timestamp", Value: -1}}).
		SetLimit(limit)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, filter, opts)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var messages []*pb.IMMessage
	for cursor.Next(ctx) {
		var doc MessageDocument
		if err := cursor.Decode(&doc); err != nil {
			continue
		}

		msg := &pb.IMMessage{
			Type:         doc.Type,
			From:         doc.From,
			FromUsername: doc.FromUsername,
			To:           doc.To,
			Content:      doc.Content,
			Timestamp:    doc.Timestamp,
			Extra:        doc.Extra,
			Filename:     doc.Filename,
			Filesize:     doc.Filesize,
			MimeType:     doc.MimeType,
		}
		messages = append(messages, msg)
	}

	return messages, nil
}

// GetGroupMessages 获取群聊消息
func (m *MongoDBMessageStorage) GetGroupMessages(groupID string, limit int64) ([]*pb.IMMessage, error) {
	collection := m.database.Collection("messages")

	filter := bson.M{"group_id": groupID}

	opts := options.Find().
		SetSort(bson.D{{Key: "timestamp", Value: -1}}).
		SetLimit(limit)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, filter, opts)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var messages []*pb.IMMessage
	for cursor.Next(ctx) {
		var doc MessageDocument
		if err := cursor.Decode(&doc); err != nil {
			continue
		}

		msg := &pb.IMMessage{
			Type:         doc.Type,
			From:         doc.From,
			FromUsername: doc.FromUsername,
			GroupId:      doc.GroupID,
			Content:      doc.Content,
			Timestamp:    doc.Timestamp,
			Extra:        doc.Extra,
			Filename:     doc.Filename,
			Filesize:     doc.Filesize,
			MimeType:     doc.MimeType,
		}
		messages = append(messages, msg)
	}

	return messages, nil
}

// DeleteMessages 删除消息（按时间范围）
func (m *MongoDBMessageStorage) DeleteMessages(beforeTime int64) error {
	collection := m.database.Collection("messages")

	filter := bson.M{"timestamp": bson.M{"$lt": beforeTime}}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	_, err := collection.DeleteMany(ctx, filter)
	return err
}

// Close 关闭MongoDB连接
func (m *MongoDBMessageStorage) Close() error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	return m.client.Disconnect(ctx)
}
