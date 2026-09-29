"use client";

import React from "react";
import { GraduationCap, Search, ExternalLink, Sparkles } from "lucide-react";
import { RESEARCH_TRACK, RESEARCH_YOUTUBE_SEARCHES } from "../data/roadmapData";

export const ResearchTrack: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-teal-50 border border-teal-100 px-3 py-1 text-xs font-bold text-teal-700">
            <GraduationCap className="h-3.5 w-3.5 inline mr-1" /> Academic Track
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            Optional MSc Methodology
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
          Research & Thesis Track
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          For students pursuing an MSc or research career: paper reading, literature review matrices, baseline benchmarking, ablation studies, and Overleaf/LaTeX publishing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {RESEARCH_TRACK.map((stage, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-teal-50 border border-teal-100 px-2.5 py-1 text-xs font-bold text-teal-700">
                {stage.month}
              </span>
              <span className="text-xs text-slate-500 font-mono">{stage.stage}</span>
            </div>

            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {stage.topics}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-teal-600" />
          <h3 className="text-base font-bold text-slate-900">
            Recommended Academic Research YouTube Guides
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {RESEARCH_YOUTUBE_SEARCHES.map((query, qIdx) => (
            <a
              key={qIdx}
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                query
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-100 transition shadow-2xs"
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="truncate">{query}</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
