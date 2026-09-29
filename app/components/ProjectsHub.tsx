"use client";

import React from "react";
import {
  FolderGit2,
  CheckCircle,
  Circle,
  Play,
  ExternalLink,
  Search,
  Code2,
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data/roadmapData";
import { VideoLink, UserProgress } from "../types/roadmap";

interface ProjectsHubProps {
  progress: UserProgress;
  onToggleProject: (projectId: string) => void;
  onOpenVideo: (video: VideoLink) => void;
}

export const ProjectsHub: React.FC<ProjectsHubProps> = ({
  progress,
  onToggleProject,
  onOpenVideo,
}) => {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-pink-50 border border-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
            <FolderGit2 className="h-3.5 w-3.5 inline mr-1" /> Portfolio Showcase
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
            {progress.completedProjects.length} / 4 Completed
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
          Core Industry Projects
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          The 4 centerpiece projects to feature on your GitHub profile, thesis defense, and technical interviews.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PORTFOLIO_PROJECTS.map((project) => {
          const isCompleted = progress.completedProjects.includes(project.id);
          return (
            <div
              key={project.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between space-y-5 transition-all shadow-xs ${
                isCompleted
                  ? "border-emerald-300 bg-emerald-50/40"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-pink-50 border border-pink-100 px-2.5 py-1 text-xs font-bold text-pink-700">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {project.recommendedWeeks}
                  </span>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => onToggleProject(project.id)}
                      className="text-slate-400 hover:text-emerald-600 transition"
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="h-6 w-6 text-slate-300" />
                      )}
                    </button>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Code2 className="h-3.5 w-3.5 text-pink-600" /> Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Features
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-pink-600 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Video Link */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                {project.videoResources.map((vid, vIdx) => (
                  <button
                    key={vIdx}
                    onClick={() => onOpenVideo(vid)}
                    className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition shadow-2xs"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Play className="h-3.5 w-3.5 fill-pink-600 text-pink-600" />
                      <span className="truncate">{vid.title}</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  </button>
                ))}

                {project.searchQuery && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-2 border border-slate-200 font-mono">
                    <Search className="h-3.5 w-3.5 text-slate-400" />
                    <span>Search: {project.searchQuery}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
