package main

import (
	"fmt"
	"os"

	"github.com/peterh/liner"
)

func readLine(prompt string, l *liner.State) string {
	line, err := l.Prompt(prompt)
	if err != nil {
		fmt.Println()
		os.Exit(0)
	}
	return line
}
