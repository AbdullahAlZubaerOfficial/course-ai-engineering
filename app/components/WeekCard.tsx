"use client";

import React from "react";
import {
  CheckCircle,
  Circle,
  Play,
  ExternalLink,
  StickyNote,
  Code,
  Tag,
  BookOpen,
} from "lucide-react";
import { WeekTopic, VideoLink } from "../types/roadmap";
import { UserProgress } from "../types/roadmap";

interface WeekCardProps {
  week: WeekTopic;
  progress: UserProgress;
  onToggleDay: (dayNumber: number) => void;
  onOpenVideo: (video: VideoLink) => void;
  onOpenNote: (key: string, title: string) => void;
  searchQuery: string;
}

export const WeekCard: React.FC<WeekCardProps> = ({
  week,
  progress,
  onToggleDay,
  onOpenVideo,
  onOpenNote,
  searchQuery,
}) => {
  const weekDays = week.days || [];
  const completedInWeek = weekDays.filter((d) =>
    progress.completedDays.includes(d.dayNumber)
  ).length;
  const isWeekComplete = weekDays.length > 0 && completedInWeek === weekDays.length;

  return (
    <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 space-y-3 sm:space-y-5 shadow-xs">
      {/* Week Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 border-b border-slate-100 pb-3 sm:pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-pink-50 border border-pink-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-bold text-pink-700 font-mono">
              Week {week.weekNumber}
            </span>
            {isWeekComplete && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                <CheckCircle className="h-3.5 w-3.5" /> Completed
              </span>
            )}
          </div>
          <h3 className="mt-1 sm:mt-1.5 text-base sm:text-lg font-bold text-slate-900 sm:text-xl tracking-tight">
            {week.title}
          </h3>
          {week.overview && (
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {week.overview}
            </p>
          )}
        </div>

        {weekDays.length > 0 && (
          <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 border border-slate-200 self-start sm:self-auto text-xs font-mono font-semibold text-slate-700">
            <span>{completedInWeek}/{weekDays.length} Days</span>
            <div className="h-2 w-14 sm:w-16 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-pink-600 transition-all"
                style={{
                  width: `${Math.round((completedInWeek / weekDays.length) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main YouTube Resource Videos */}
      {week.mainVideos && week.mainVideos.length > 0 && (
        <div className="space-y-1.5 sm:space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-pink-600" /> Key Learning Videos & Playlists
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {week.mainVideos.map((vid, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-slate-50 border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs text-slate-800 hover:bg-slate-100 transition shadow-2xs"
              >
                <button
                  onClick={() => onOpenVideo(vid)}
                  className="flex items-center gap-1.5 text-pink-700 hover:text-pink-900 font-semibold"
                >
                  <Play className="h-3.5 w-3.5 fill-pink-600 text-pink-600" />
                  <span>{vid.title}</span>
                </button>
                <a
                  href={vid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Lessons List */}
      {weekDays.length > 0 && (
        <div className="space-y-2.5 pt-1 sm:pt-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
            Daily Lessons
          </span>
          <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
            {weekDays.map((day) => {
              const isDone = progress.completedDays.includes(day.dayNumber);
              const noteKey = `day-${day.dayNumber}`;
              const hasNote = Boolean(progress.notes[noteKey]);

              const matchesQuery =
                searchQuery === "" ||
                day.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (day.description &&
                  day.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (day.tags &&
                  day.tags.some((t) =>
                    t.toLowerCase().includes(searchQuery.toLowerCase())
                  ));

              if (!matchesQuery) return null;

              return (
                <div
                  key={day.dayNumber}
                  className={`rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-xs transition border ${
                    isDone
                      ? "bg-emerald-50/50 border-emerald-200"
                      : "bg-slate-50/80 border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex items-start gap-2 sm:gap-3 flex-1">
                      <button
                        onClick={() => onToggleDay(day.dayNumber)}
                        className="mt-0.5 text-slate-400 hover:text-emerald-600 transition shrink-0"
                      >
                        {isDone ? (
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Circle className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                        )}
                      </button>

                      <div className="space-y-0.5 sm:space-y-1">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          <span className="font-mono font-bold text-pink-700 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-100 text-[10px] sm:text-[11px]">
                            Day {day.dayNumber}
                          </span>
                          <h4
                            className={`font-bold text-xs sm:text-base tracking-tight ${
                              isDone ? "text-slate-400 line-through" : "text-slate-900"
                            }`}
                          >
                            {day.title}
                          </h4>
                        </div>

                        {day.description && (
                          <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed max-w-4xl pt-0.5">
                            {day.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Note Action Button */}
                    <button
                      onClick={() =>
                        onOpenNote(noteKey, `Day ${day.dayNumber}: ${day.title}`)
                      }
                      className={`flex items-center gap-1 rounded-md sm:rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold shrink-0 transition ${
                        hasNote
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-2xs"
                      }`}
                    >
                      <StickyNote className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-600" />
                      <span>{hasNote ? "Note" : "+ Note"}</span>
                    </button>
                  </div>

                  {/* Bottom Row: Video Buttons & Tags */}
                  {(day.videos.length > 0 || (day.tags && day.tags.length > 0)) && (
                    <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                      {/* Video Watch Buttons */}
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap flex-1">
                        {day.videos.map((vid, vi) => (
                          <button
                            key={vi}
                            onClick={() => onOpenVideo(vid)}
                            className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200 shadow-2xs transition"
                          >
                            <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-pink-600 text-pink-600 shrink-0" />
                            <span>{vid.title}</span>
                          </button>
                        ))}
                      </div>

                      {/* Topic Tags */}
                      {day.tags && day.tags.length > 0 && (
                        <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap shrink-0">
                          {day.tags.map((t, ti) => (
                            <span
                              key={ti}
                              className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-mono text-slate-600 shadow-2xs"
                            >
                              <Tag className="h-2.5 w-2.5 text-pink-600" /> {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Additional Topics */}
      {week.additionalTopics && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 sm:p-3.5 text-xs space-y-1">
          <span className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
            <Code className="h-3.5 w-3.5 text-amber-700" /> Additional Topics Covered:
          </span>
          <ul className="list-disc list-inside space-y-0.5 text-amber-800 pl-1 text-[11px] sm:text-xs">
            {week.additionalTopics.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Mini-Project */}
      {week.miniProject && (
        <div className="rounded-xl bg-pink-50/80 border border-pink-100 p-3 sm:p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-pink-900">
              Hands-on Mini-Project
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">{week.miniProject.title}</h4>
          <p className="text-[11px] sm:text-xs text-slate-700">{week.miniProject.description}</p>
          <div className="pt-1 flex items-center gap-2">
            {week.miniProject.videos.map((mv, mvi) => (
              <button
                key={mvi}
                onClick={() => onOpenVideo(mv)}
                className="flex items-center gap-1.5 rounded-lg bg-pink-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-pink-700 transition"
              >
                <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-white" />
                <span>Watch Project Tutorial</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
