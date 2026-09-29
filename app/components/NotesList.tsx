"use client";

import React from "react";
import { StickyNote, Edit3, Trash2 } from "lucide-react";
import { UserProgress } from "../types/roadmap";

interface NotesListProps {
  progress: UserProgress;
  onOpenNote: (key: string, title: string) => void;
  onDeleteNote: (key: string) => void;
}

export const NotesList: React.FC<NotesListProps> = ({
  progress,
  onOpenNote,
  onDeleteNote,
}) => {
  const noteEntries = Object.entries(progress.notes || {}).filter(
    ([_, text]) => text.trim() !== ""
  );

  if (noteEntries.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center space-y-4 shadow-xs">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-amber-600">
          <StickyNote className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">No Notes Saved Yet</h3>
          <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
            Record personal notes, code snippets, equations, or key takeaways for any lesson by clicking "+ Note".
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            <StickyNote className="h-3.5 w-3.5 inline mr-1" /> Notebook
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            {noteEntries.length} Saved Notes
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
          Personal Study Notes
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {noteEntries.map(([key, content]) => {
          const displayTitle = key.startsWith("day-")
            ? `Day ${key.replace("day-", "")} Lesson Note`
            : key;

          return (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-amber-50 border border-amber-200 px-2.5 py-1 text-xs font-bold text-amber-900">
                    {displayTitle}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onOpenNote(key, displayTitle)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900"
                      title="Edit Note"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDeleteNote(key)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                      title="Delete Note"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed line-clamp-6">
                  {content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
