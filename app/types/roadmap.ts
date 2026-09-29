export interface VideoLink {
  title: string;
  url: string;
  youtubeId?: string;
  isPlaylist?: boolean;
}

export interface DayLesson {
  dayNumber: number;
  title: string;
  description?: string;
  videos: VideoLink[];
  tags?: string[];
}

export interface WeekTopic {
  weekNumber: number;
  title: string;
  overview?: string;
  mainVideos: VideoLink[];
  days?: DayLesson[];
  miniProject?: {
    title: string;
    description: string;
    videos: VideoLink[];
  };
  additionalTopics?: string[];
  importantConcepts?: string[];
}

export interface MonthCurriculum {
  monthNumber: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  weeks: WeekTopic[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  recommendedWeeks: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  videoResources: VideoLink[];
  searchQuery?: string;
  badge: string;
}

export interface CapstoneDay {
  dayNumber: number;
  title: string;
  tasks: string[];
  deliverable: string;
}

export interface ResearchStage {
  stage: string;
  month: string;
  topics: string;
}

export interface UserProgress {
  completedDays: number[]; // array of day numbers, e.g. 8, 9, 10
  completedWeeks: number[]; // array of week numbers, e.g. 1, 2
  completedProjects: string[]; // array of project IDs
  notes: Record<string, string>; // day or week key -> markdown text
  bookmarks: string[]; // video URLs or day IDs
  lastUpdated: string;
}
