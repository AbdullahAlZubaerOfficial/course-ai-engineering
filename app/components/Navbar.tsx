"use client";

import React, { useState, useRef } from "react";
import {
  Search,
  BookOpen,
  FolderGit2,
  CalendarCheck,
  GraduationCap,
  Download,
  Upload,
  RotateCcw,
  StickyNote,
  Menu,
  X,
} from "lucide-react";
import { UserProgress } from "../types/roadmap";

interface NavbarProps {
  activeTab: "curriculum" | "projects" | "capstone" | "research" | "notes";
  setActiveTab: (tab: "curriculum" | "projects" | "capstone" | "research" | "notes") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  progress: UserProgress;
  onExportProgress: () => void;
  onImportProgress: (imported: UserProgress) => void;
  onResetProgress: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  progress,
  onExportProgress,
  onImportProgress,
  onResetProgress,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalDaysCompleted = progress.completedDays.length;
  const progressPercent = Math.round((totalDaysCompleted / 120) * 100);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json && Array.isArray(json.completedDays)) {
          onImportProgress(json);
          alert("Progress restored successfully!");
        } else {
          alert("Invalid backup file format.");
        }
      } catch {
        alert("Error parsing backup file.");
      }
    };
    reader.readAsText(file);
  };

  const navItems = [
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "capstone", label: "Capstone", icon: CalendarCheck },
    { id: "research", label: "Research", icon: GraduationCap },
    { id: "notes", label: `Notes (${Object.keys(progress.notes || {}).length})`, icon: StickyNote },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 md:px-8 gap-2 sm:gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img
            src="https://zubaer.hosensoft.com/myimage.png"
            alt="Logo"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl object-cover border border-slate-200 shadow-xs"
          />
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              120-Day AI Roadmap
            </h1>
            <span className="hidden xl:inline-block rounded-md bg-pink-50 border border-pink-100 px-2 py-0.5 text-[11px] font-semibold text-pink-700">
              Data & GenAI Track
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Search & Controls */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="relative w-44 xl:w-56">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search curriculum..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 transition focus:bg-white focus:border-pink-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 rounded-lg border border-pink-100 bg-pink-50/50 px-3 py-1.5 text-xs text-slate-700 font-mono font-medium">
            <span className="text-pink-600 font-bold">{progressPercent}%</span>
            <span className="text-slate-400">({totalDaysCompleted}/120)</span>
          </div>

          <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
            <button
              onClick={onExportProgress}
              title="Backup JSON"
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
            >
              <Download className="h-4 w-4" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Restore JSON"
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
            >
              <Upload className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                if (confirm("Reset all learning progress?")) onResetProgress();
              }}
              title="Reset progress"
              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <span className="text-[11px] font-mono font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
            {progressPercent}%
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-3 py-3 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, days, code..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-pink-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-2.5 py-2 text-xs font-semibold rounded-lg border transition ${
                    isActive
                      ? "bg-pink-600 text-white border-pink-600 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] text-slate-500">
            <span>Progress: {totalDaysCompleted}/120 Days ({progressPercent}%)</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={onExportProgress}
                className="flex items-center gap-1 rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-700 hover:bg-slate-200 font-medium"
              >
                <Download className="h-3 w-3" /> Backup
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1 rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-700 hover:bg-slate-200 font-medium"
              >
                <Upload className="h-3 w-3" /> Restore
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
