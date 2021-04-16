import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./app.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [{ color: [] }, { background: [] }],

    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["code-block"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "code-block",
];
const App = () => {
  const [state, setState] = useState({ text: "" });
  const handleChange = value => {
    setState({ text: value });
  };

  return (
    <>
      <ReactQuill
        value={state.text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={"좋은 캠페인이 되도록 해볼까요?"}
      />
    </>
  );
};

export default App;
