"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Layers, CheckCircle2 } from "lucide-react";
import { MonthCurriculum, VideoLink } from "../types/roadmap";
import { WeekCard } from "./WeekCard";
import { UserProgress } from "../types/roadmap";

interface MonthAccordionProps {
  month: MonthCurriculum;
  progress: UserProgress;
  onToggleDay: (dayNumber: number) => void;
  onOpenVideo: (video: VideoLink) => void;
  onOpenNote: (key: string, title: string) => void;
  searchQuery: string;
}

export const MonthAccordion: React.FC<MonthAccordionProps> = ({
  month,
  progress,
  onToggleDay,
  onOpenVideo,
  onOpenNote,
  searchQuery,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  let allMonthDays: number[] = [];
  month.weeks.forEach((w) => {
    w.days?.forEach((d) => allMonthDays.push(d.dayNumber));
  });

  const completedInMonth = allMonthDays.filter((d) =>
    progress.completedDays.includes(d)
  ).length;
  const isMonthCompleted =
    allMonthDays.length > 0 && completedInMonth === allMonthDays.length;

  return (
    <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
      {/* Month Header Banner */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2.5 p-3.5 sm:p-5 md:p-6 bg-slate-50/80 hover:bg-slate-100/60 transition-colors text-left border-b border-slate-200"
      >
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-md bg-pink-50 border border-pink-100 px-2 py-0.5 text-[11px] sm:text-xs font-bold text-pink-700">
              <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Month {month.monthNumber}
            </span>
            <span className="rounded-md bg-slate-200/80 border border-slate-300 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-slate-700">
              {month.badge}
            </span>
            {isMonthCompleted && (
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[11px] sm:text-xs font-bold text-emerald-700">
                <CheckCircle2 className="h-3 w-3" /> Completed
              </span>
            )}
          </div>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight sm:text-2xl">
            {month.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            {month.description}
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          {allMonthDays.length > 0 && (
            <div className="flex flex-col items-end text-xs font-mono">
              <span className="text-slate-800 font-bold text-[11px] sm:text-xs">
                {completedInMonth} / {allMonthDays.length} Days
              </span>
              <span className="text-pink-600 font-bold text-[11px] sm:text-xs">
                {Math.round((completedInMonth / allMonthDays.length) * 100)}%
              </span>
            </div>
          )}

          <div className="rounded-lg bg-white p-1.5 sm:p-2 text-slate-500 border border-slate-200 hover:text-slate-900 shadow-xs">
            {isOpen ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="p-2 sm:p-4 md:p-6 space-y-3 sm:space-y-5 bg-white">
          {month.weeks.map((week) => (
            <WeekCard
              key={week.weekNumber}
              week={week}
              progress={progress}
              onToggleDay={onToggleDay}
              onOpenVideo={onOpenVideo}
              onOpenNote={onOpenNote}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};
