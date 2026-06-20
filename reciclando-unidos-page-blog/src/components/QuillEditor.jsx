"use client";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function QuillEditor({ value, onChange }) {
    return (
        <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-gray-200 shadow-md"
            value={value}
            onChange={onChange}
        />
    );
}