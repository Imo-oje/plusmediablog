import "./editor.scss";

import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Editor() {
  const [postContent, setPostContent] = useState<{
    content: string | undefined;
    title: string;
  }>({
    content: "",
    title: "",
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
    onUpdate: (data) => {
      setPostContent((prevContent) => ({
        ...prevContent,
        content: data.editor.getHTML(),
      }));
    },
  });

  const { mutate: createPost } = useMutation({
    mutationFn: (data: { content: string | undefined; title: string }) => {
      return fetch("http://localhost:2025/post/create-post", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  });

  const handleSubmit = () => {
    console.log(postContent);
    return createPost(postContent);
  };

  return (
    <>
      <div className="editor m-1 mt-12">
        <textarea
          onChange={(e) => {
            setPostContent((prevContent) => ({
              ...prevContent,
              title: e.target.value,
            }));
          }}
          className="m-2 mx-auto p-2 focus:outline-none !text-4xl w-full max-h-14 resize-none"
          name="title"
          placeholder="Post title..."
        />
        {editor && <MenuBar editor={editor} />}
        <EditorContent className="editor__content" editor={editor} />
      </div>
      <div>
        <Button onClick={handleSubmit}>Publish</Button>
      </div>
    </>
  );
}
