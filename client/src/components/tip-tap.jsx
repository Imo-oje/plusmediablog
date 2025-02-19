import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./editor-tollbar";
import Heading from "@tiptap/extension-heading";

const TipTap = ({ description, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class: "text-2xl font-bold",
          level: [2],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border p-4 min-h-[150px] border-input bg-white",
      },
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
