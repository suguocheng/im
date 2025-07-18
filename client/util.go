package main

import (
	"fmt"
	"os"

	"github.com/chzyer/readline"
)

var rl *readline.Instance

func initReadline() {
	var err error
	rl, err = readline.New("")
	if err != nil {
		fmt.Println("readline 初始化失败:", err)
		os.Exit(1)
	}
}

func closeReadline() {
	if rl != nil {
		rl.Close()
	}
}

func readLine(prompt string, _ interface{}) string {
	rl.SetPrompt(prompt)
	line, err := rl.Readline()
	if err != nil {
		fmt.Println()
		os.Exit(0)
	}
	return line
}
