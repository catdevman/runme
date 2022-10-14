package main

import (
	"bytes"
	"encoding/json"
	"syscall/js"

	"github.com/stateful/runme/internal/document"
	"github.com/stateful/runme/internal/renderer"
)

// These are variables so that they can be set during the build time.
var (
	BuildDate    = "unknown"
	BuildVersion = "0.0.0"
	Commit       = "unknown"
)

func main() {
	js.Global().Set("GetSnippets", js.FuncOf(GetBlocks))
	js.Global().Set("GetDocument", js.FuncOf(GetDocument))

	select {}
}

func GetBlocks(this js.Value, args []js.Value) interface{} {
	readme := args[0].String()
	blocks := document.NewSource([]byte(readme)).Parse().CodeBlocks()

	var result []interface{}

	for _, block := range blocks {
		var lines []interface{}
		for _, line := range block.Lines() {
			lines = append(lines, line)
		}
		entry := map[string]interface{}{
			"name":        block.Name(),
			"description": block.Intro(),
			"content":     block.Content(),
			"executable":  block.Executable(),
			"lines":       lines,
		}
		result = append(result, entry)
	}

	return result
}

func GetDocument(this js.Value, args []js.Value) interface{} {
	readme := args[0].String()
	pSource := document.NewSource([]byte(readme)).Parse()

	var b bytes.Buffer
	_ = renderer.RenderToJSON(&b, pSource.Source(), pSource.Root())

	dynamic := make(map[string]interface{})
	json.Unmarshal(b.Bytes(), &dynamic)

	return dynamic
}