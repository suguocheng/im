package protocol

type IMMessage struct {
	Type    string `json:"type"` // login, chat, etc.
	From    string `json:"from"`
	To      string `json:"to"`
	Content string `json:"content"`
	Token   string `json:"token,omitempty"`
}
