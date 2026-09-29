"use client";

import React, { useState, useEffect } from "react";
import { MONTHS_DATA } from "./data/roadmapData";
import { UserProgress, VideoLink } from "./types/roadmap";
import { Navbar } from "./components/Navbar";
import { HeroStats } from "./components/HeroStats";
import { MonthAccordion } from "./components/MonthAccordion";
import { ProjectsHub } from "./components/ProjectsHub";
import { CapstoneTimeline } from "./components/CapstoneTimeline";
import { ResearchTrack } from "./components/ResearchTrack";
import { NotesList } from "./components/NotesList";
import { VideoModal } from "./components/VideoModal";
import { NoteDrawer } from "./components/NoteDrawer";

const STORAGE_KEY = "ai_course_roadmap_progress_v1";

const DEFAULT_PROGRESS: UserProgress = {
  completedDays: [],
  completedWeeks: [],
  completedProjects: [],
  notes: {},
  bookmarks: [],
  lastUpdated: new Date().toISOString(),
};

export default function Home() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [activeTab, setActiveTab] = useState<
    "curriculum" | "projects" | "capstone" | "research" | "notes"
  >("curriculum");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonthFilter, setSelectedMonthFilter] = useState<number | null>(null);

  const [activeVideo, setActiveVideo] = useState<VideoLink | null>(null);

  const [noteDrawer, setNoteDrawer] = useState<{
    noteKey: string | null;
    noteTitle: string;
    initialContent: string;
  }>({
    noteKey: null,
    noteTitle: "",
    initialContent: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.completedDays)) {
          setProgress(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load progress from local storage", e);
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    const updated = {
      ...newProgress,
      lastUpdated: new Date().toISOString(),
    };
    setProgress(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save progress to local storage", e);
    }
  };

  const handleToggleDay = (dayNumber: number) => {
    const isCompleted = progress.completedDays.includes(dayNumber);
    const newCompletedDays = isCompleted
      ? progress.completedDays.filter((d) => d !== dayNumber)
      : [...progress.completedDays, dayNumber];

    saveProgress({
      ...progress,
      completedDays: newCompletedDays,
    });
  };

  const handleToggleProject = (projectId: string) => {
    const isCompleted = progress.completedProjects.includes(projectId);
    const newCompletedProjects = isCompleted
      ? progress.completedProjects.filter((id) => id !== projectId)
      : [...progress.completedProjects, projectId];

    saveProgress({
      ...progress,
      completedProjects: newCompletedProjects,
    });
  };

  const handleSaveNote = (key: string, content: string) => {
    const updatedNotes = { ...progress.notes };
    if (content.trim() === "") {
      delete updatedNotes[key];
    } else {
      updatedNotes[key] = content;
    }
    saveProgress({
      ...progress,
      notes: updatedNotes,
    });
  };

  const handleOpenNote = (key: string, title: string) => {
    setNoteDrawer({
      noteKey: key,
      noteTitle: title,
      initialContent: progress.notes[key] || "",
    });
  };

  const handleExportProgress = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `ai_roadmap_backup_${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportProgress = (imported: UserProgress) => {
    saveProgress(imported);
  };

  const handleResetProgress = () => {
    saveProgress(DEFAULT_PROGRESS);
  };

  const displayedMonths = selectedMonthFilter
    ? MONTHS_DATA.filter((m) => m.monthNumber === selectedMonthFilter)
    : MONTHS_DATA;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-pink-600 selection:text-white pb-16">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        progress={progress}
        onExportProgress={handleExportProgress}
        onImportProgress={handleImportProgress}
        onResetProgress={handleResetProgress}
      />

      <HeroStats
        progress={progress}
        onSelectMonthFilter={setSelectedMonthFilter}
        selectedMonthFilter={selectedMonthFilter}
      />

      <main className="mx-auto max-w-7xl flex-1 px-4 pt-8 sm:px-8 w-full">
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {displayedMonths.map((month) => (
              <MonthAccordion
                key={month.monthNumber}
                month={month}
                progress={progress}
                onToggleDay={handleToggleDay}
                onOpenVideo={setActiveVideo}
                onOpenNote={handleOpenNote}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <ProjectsHub
            progress={progress}
            onToggleProject={handleToggleProject}
            onOpenVideo={setActiveVideo}
          />
        )}

        {activeTab === "capstone" && (
          <CapstoneTimeline
            progress={progress}
            onToggleDay={handleToggleDay}
            onOpenNote={handleOpenNote}
          />
        )}

        {activeTab === "research" && <ResearchTrack />}

        {activeTab === "notes" && (
          <NotesList
            progress={progress}
            onOpenNote={handleOpenNote}
            onDeleteNote={(key) => handleSaveNote(key, "")}
          />
        )}
      </main>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <NoteDrawer
        noteKey={noteDrawer.noteKey}
        noteTitle={noteDrawer.noteTitle}
        initialContent={noteDrawer.initialContent}
        onSave={handleSaveNote}
        onClose={() =>
          setNoteDrawer({ noteKey: null, noteTitle: "", initialContent: "" })
        }
      />
    </div>
  );
}
