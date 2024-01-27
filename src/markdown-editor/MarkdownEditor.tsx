import React, { ChangeEvent, useRef, useState } from "react";

export function MarkdownEditor() {
  const [enteredText, setEnteredText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredText(event.target.value);
  };

  const handleInsertText = (markdown: string) => {
    const markdownArray = [
      markdown.slice(0, markdown.length / 2),
      markdown.slice(markdown.length / 2),
    ];
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart || 0;
    const end = textarea.selectionEnd || 0;

    const selectedText = textarea.value.slice(start, end);
    console.log(selectedText);

    const newText =
      enteredText.substring(0, start) +
      markdownArray[0] +
      selectedText +
      markdownArray[1] +
      enteredText.substring(end);
    setEnteredText(newText);

    textarea.focus();
    const caretPosition = start + markdown.length / 2;
    textarea.setSelectionRange(caretPosition, caretPosition);
  };

  const handleInsertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      handleInsertText(`[${url}](${url})`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Markdown Editor</h1>
      <div className="mb-2 flex">
        <button
          className="mr-2 rounded bg-blue-500 p-2 text-white"
          onClick={() => handleInsertText("****")}
        >
          Bold
        </button>
        {/* <button
          className="mr-2 rounded bg-green-500 p-2 text-white"
          onClick={() => handleInsertText("__")}
        >
          Underline
        </button>
        <button
          className="mr-2 rounded bg-yellow-500 p-2 text-white"
          onClick={() => handleInsertText("``")}
        >
          Code
        </button> */}
        {/* <button
          className="mr-2 rounded bg-indigo-500 p-2 text-white"
          onClick={handleInsertLink}
        >
          Link
        </button> */}
      </div>
      <textarea
        ref={textareaRef}
        className="h-40 w-full rounded-md border border-gray-300 p-2"
        placeholder="Enter your Markdown here..."
        value={enteredText}
        onChange={handleInputChange}
      />
      {/* <div className="mt-4">
        <h2 className="mb-2 text-xl font-bold">Preview</h2>
        <div
          className="w-full rounded-md border border-gray-300 p-2"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div> */}
    </div>
  );
}
