import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCEEditor = (props) => {
  const [content, setContent] = useState("");

  const handleEditorChange = (data) => {
    setContent(data);
    props.handleCallback(data);
  }

  return (
    <Editor
    // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
        value={content}
        init={{
            branding: false,
            height: 400,
            menubar: true,
            plugins:
            "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
            toolbar:
            "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
            image_advtab: true
        }}
        onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
