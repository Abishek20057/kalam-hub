export interface StatisticItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  accent: "primary" | "accent";
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const placeholderStatistics: StatisticItem[] = [
  { id: "stat-1", label: "Projects Available", value: 120, suffix: "+", icon: "folder-kanban", accent: "primary" },
  { id: "stat-2", label: "Students Trained", value: 850, suffix: "+", icon: "graduation-cap", accent: "accent" },
  { id: "stat-3", label: "Workshops Conducted", value: 25, suffix: "+", icon: "presentation", accent: "primary" },
  { id: "stat-4", label: "Internships Completed", value: 60, suffix: "+", icon: "briefcase", accent: "accent" },
  { id: "stat-5", label: "PCB Designs Created", value: 200, suffix: "+", icon: "circuit-board", accent: "primary" },
  { id: "stat-6", label: "Community Members", value: 1500, suffix: "+", icon: "users", accent: "accent" },
];

export const placeholderAchievements: AchievementItem[] = [
  {
    id: "achievement-1",
    title: "Industry-Focused Learning",
    description: "Practical programs shaped around real engineering demands and career-ready skills.",
    icon: "target",
  },
  {
    id: "achievement-2",
    title: "Hands-on Workshops",
    description: "Interactive sessions that turn concepts into working prototypes and confidence.",
    icon: "microscope",
  },
  {
    id: "achievement-3",
    title: "Practical Electronics Projects",
    description: "Build meaningful devices with guidance from idea to deployment.",
    icon: "rocket",
  },
  {
    id: "achievement-4",
    title: "Innovation-Driven Platform",
    description: "A collaborative environment designed to accelerate student innovation.",
    icon: "sparkles",
  },
];
