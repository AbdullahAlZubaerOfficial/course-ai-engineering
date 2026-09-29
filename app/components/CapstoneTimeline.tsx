"use client";

import React from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Circle,
  FileCheck,
  CheckCircle,
  StickyNote,
} from "lucide-react";
import { CAPSTONE_DAYS } from "../data/roadmapData";
import { UserProgress } from "../types/roadmap";

interface CapstoneTimelineProps {
  progress: UserProgress;
  onToggleDay: (dayNumber: number) => void;
  onOpenNote: (key: string, title: string) => void;
}

export const CapstoneTimeline: React.FC<CapstoneTimelineProps> = ({
  progress,
  onToggleDay,
  onOpenNote,
}) => {
  const completedCapstoneCount = CAPSTONE_DAYS.filter((d) =>
    progress.completedDays.includes(d.dayNumber)
  ).length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-pink-50 border border-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
            <CalendarCheck className="h-3.5 w-3.5 inline mr-1" /> Days 113–120 Revision
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            {completedCapstoneCount} / 8 Days Completed
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
          Capstone & Portfolio Revision
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          The final 8 days are designed for full portfolio consolidation, model tuning, deployment verification, README documentation, and demo recording.
        </p>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CAPSTONE_DAYS.map((cap) => {
          const isDone = progress.completedDays.includes(cap.dayNumber);
          const noteKey = `day-${cap.dayNumber}`;
          const hasNote = Boolean(progress.notes[noteKey]);

          return (
            <div
              key={cap.dayNumber}
              className={`rounded-2xl border p-5 flex flex-col justify-between space-y-4 transition shadow-xs ${
                isDone
                  ? "border-emerald-300 bg-emerald-50/40"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-pink-50 border border-pink-100 px-2.5 py-1 text-xs font-bold text-pink-700">
                    Day {cap.dayNumber}
                  </span>
                  <button
                    onClick={() => onToggleDay(cap.dayNumber)}
                    className="text-slate-400 hover:text-emerald-600 transition"
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-300" />
                    )}
                  </button>
                </div>

                <h3 className={`text-base font-bold ${isDone ? "text-slate-400 line-through" : "text-slate-900"}`}>
                  {cap.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-600">
                  <span className="font-bold uppercase text-slate-500 flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-pink-600" /> Key Tasks:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    {cap.tasks.map((task, tIdx) => (
                      <li key={tIdx}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <FileCheck className="h-4 w-4 text-emerald-600" />
                  <span className="truncate max-w-[200px]">
                    {cap.deliverable}
                  </span>
                </div>

                <button
                  onClick={() =>
                    onOpenNote(noteKey, `Day ${cap.dayNumber}: ${cap.title}`)
                  }
                  className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                    hasNote
                      ? "bg-amber-100 text-amber-900 border border-amber-300"
                      : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  <StickyNote className="h-3.5 w-3.5" />
                  <span>{hasNote ? "Note" : "+ Note"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
