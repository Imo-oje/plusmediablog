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
import {
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectValue,
  Select,
} from "../ui/select";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";

export default function Editor() {
  const [postContent, setPostContent] = useState<{
    content: string | undefined;
    title: string;
    category: string;
    isDraft: boolean;
    image: File | null;
  }>({
    content: "",
    title: "",
    category: "",
    isDraft: false,
    image: null,
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

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return fetch(`${import.meta.env.VITE_API_URL}/post/create-post`, {
        method: "POST",
        credentials: "include",
        body: data,
      });
    },
  });

  const handleSubmit = (draft = false) => {
    if (!postContent.title || !postContent.content) {
      return;
    }

    const formData = new FormData();
    formData.append("title", postContent.title);
    formData.append("content", postContent.content || "");
    formData.append("category", postContent.category);
    formData.append("isDraft", draft.toString()); // Convert boolean to string
    if (postContent.image) {
      formData.append("image", postContent.image);
    }
    createPost(formData);
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            onChange={(e) => {
              setPostContent((prevContent) => ({
                ...prevContent,
                image: e.target.files?.[0] || null,
              }));
            }}
            id="image"
            type="file"
          />
        </div>
        {editor && <MenuBar editor={editor} />}
        <EditorContent className="editor__content" editor={editor} />
      </div>
      <div className="flex gap-4 px-1">
        <Select
          onValueChange={(value) => {
            setPostContent((preValue) => ({
              ...preValue,
              category: value,
            }));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="tech">tech</SelectItem>
              <SelectItem value="business">business</SelectItem>
              <SelectItem value="sports">sports</SelectItem>
              <SelectItem value="celebrities">celebrities</SelectItem>
              <SelectItem value="finance">finance</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button disabled={isPending} onClick={() => handleSubmit(true)}>
          {isPending ? (
            <>
              <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
            </>
          ) : (
            "Save Draft"
          )}
        </Button>
        <Button
          disabled={isPending}
          onClick={() => handleSubmit(false)}
          className="w-1/2"
        >
          {isPending ? (
            <>
              <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
            </>
          ) : (
            "Publish"
          )}
        </Button>
      </div>
    </>
  );
}
