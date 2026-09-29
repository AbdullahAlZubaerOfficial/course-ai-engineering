"use client";

import React from "react";
import { CheckCircle2, Zap, Trophy } from "lucide-react";
import { MONTHS_DATA } from "../data/roadmapData";
import { UserProgress } from "../types/roadmap";

interface HeroStatsProps {
  progress: UserProgress;
  onSelectMonthFilter: (monthNumber: number | null) => void;
  selectedMonthFilter: number | null;
}

export const HeroStats: React.FC<HeroStatsProps> = ({
  progress,
  onSelectMonthFilter,
  selectedMonthFilter,
}) => {
  const completedDaysCount = progress.completedDays.length;
  const overallPercent = Math.min(100, Math.round((completedDaysCount / 120) * 100));

  const monthProgress = MONTHS_DATA.map((month) => {
    let monthDays: number[] = [];
    month.weeks.forEach((w) => {
      w.days?.forEach((d) => monthDays.push(d.dayNumber));
    });
    const completedInMonth = monthDays.filter((d) => progress.completedDays.includes(d)).length;
    const totalInMonth = monthDays.length || 28;
    const percent = Math.round((completedInMonth / totalInMonth) * 100);
    return {
      monthNumber: month.monthNumber,
      title: month.title.split("—")[1]?.trim() || month.title,
      badge: month.badge,
      completed: completedInMonth,
      total: totalInMonth,
      percent,
    };
  });

  return (
    <section className="mx-auto max-w-7xl px-2.5 sm:px-6 md:px-8 pt-3 sm:pt-6">
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-xs space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Main Info */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-pink-700 border border-pink-100">
                <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-pink-600" /> 120-Day Mastery Track
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-emerald-700 border border-emerald-100">
                <Trophy className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600" /> {completedDaysCount} / 120 Days Done
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              AI, Data Engineering & GenAI Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Master Python, Linear Algebra, Calculus, Pandas, Scikit-Learn, PyTorch, CNNs, Transformers, LLMs, RAG, AI Agents with LangGraph & MLOps Cloud Deployment.
            </p>

            {/* Overall Progress Bar */}
            <div className="pt-1 sm:pt-2 max-w-2xl space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Overall Curriculum Completion</span>
                <span className="text-pink-600 font-bold font-mono">{overallPercent}%</span>
              </div>
              <div className="h-2.5 sm:h-3 w-full rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                <div
                  className="h-full bg-pink-600 transition-all duration-300 rounded-full"
                  style={{ width: `${overallPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Month Quick Filter Cards */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[480px]">
            {monthProgress.map((m) => {
              const isSelected = selectedMonthFilter === m.monthNumber;
              return (
                <button
                  key={m.monthNumber}
                  onClick={() =>
                    onSelectMonthFilter(isSelected ? null : m.monthNumber)
                  }
                  className={`flex flex-col justify-between rounded-lg sm:rounded-xl p-2 sm:p-3 text-left border transition-all ${
                    isSelected
                      ? "bg-pink-600 text-white border-pink-600 shadow-md font-semibold"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      Month {m.monthNumber}
                    </span>
                    {m.percent === 100 && (
                      <CheckCircle2
                        className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-emerald-600"}`}
                      />
                    )}
                  </div>

                  <p className="mt-0.5 sm:mt-1 text-xs font-semibold line-clamp-1">
                    {m.title}
                  </p>

                  <div className="mt-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono opacity-90">
                    <span>{m.completed}/{m.total} Days</span>
                    <span className="font-bold">{m.percent}%</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {selectedMonthFilter !== null && (
          <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 text-xs">
            <span className="text-slate-600">
              Showing curriculum for <strong className="text-pink-600">Month {selectedMonthFilter}</strong>
            </span>
            <button
              onClick={() => onSelectMonthFilter(null)}
              className="text-pink-600 hover:text-pink-800 font-semibold underline"
            >
              Show All Months
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
