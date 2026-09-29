"use client";

import React, { useState, useEffect } from "react";
import { X, Save, Trash2, StickyNote } from "lucide-react";

interface NoteDrawerProps {
  noteKey: string | null;
  noteTitle: string;
  initialContent: string;
  onSave: (key: string, content: string) => void;
  onClose: () => void;
}

export const NoteDrawer: React.FC<NoteDrawerProps> = ({
  noteKey,
  noteTitle,
  initialContent,
  onSave,
  onClose,
}) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent, noteKey]);

  if (!noteKey) return null;

  const handleSave = () => {
    onSave(noteKey, content);
    onClose();
  };

  const handleDelete = () => {
    onSave(noteKey, "");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-4 bg-slate-50">
          <div className="flex items-center gap-2">
            <StickyNote className="h-4 w-4 text-slate-700" />
            <h3 className="text-xs font-bold text-slate-900 line-clamp-1 font-mono">
              {noteTitle}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Editor Area */}
        <div className="flex-1 p-4 space-y-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write study notes, takeaways, code snippets..."
            className="h-full w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-pink-500 focus:outline-none font-mono leading-relaxed resize-none"
          />
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-3.5 bg-slate-50 flex items-center justify-between">
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 rounded-lg bg-red-50 border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100"
          >
            <Trash2 className="h-3.5 w-3.5" /> Clear
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 rounded-lg bg-pink-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-pink-700"
            >
              <Save className="h-3.5 w-3.5" /> Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
