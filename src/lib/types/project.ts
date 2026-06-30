/**
 * KalamHub — Project Type Definition
 *
 * This interface is the permanent data contract between:
 * - Phase 1 placeholder data (/data/placeholder/projects.ts)
 * - Phase 5 database (projects table, where featured=true)
 * - Phase 4 Admin Dashboard (project management panel)
 *
 * Never change field names without updating all three layers.
 */
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
export type ProjectAccessType = "Free" | "Premium";

export interface ProjectTag {
  label: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;          /* 2 lines max on card */
  thumbnailUrl: string;
  thumbnailAlt: string;
  category: string;             /* e.g. "Robotics", "IoT", "AI/ML" */
  categorySlug: string;
  tags: ProjectTag[];           /* 2–3 shown on card, full list on detail page */
  difficulty: DifficultyLevel;
  accessType: ProjectAccessType;
  featured: boolean;            /* Admin toggle: show on home page */
  publishedAt: string;          /* ISO 8601 */
  viewCount?: number;
}
