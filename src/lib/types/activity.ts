/**
 * KalamHub — Activity Type Definition
 *
 * Backs the Activity Gallery section (Architecture Doc 4.11).
 * Data contract between:
 * - Phase 1 placeholder data (/data/placeholder/activities.ts)
 * - Phase 5 database (activities table, where home_featured=true)
 * - Phase 4 Admin Dashboard (activity management panel)
 *
 * Never change field names without updating all three layers.
 */
export type ActivityCategory =
  | "Internships"
  | "Workshops"
  | "Industrial Visits"
  | "Hackathons"
  | "Project Expo"
  | "Events"
  | "Team Activities"
  | "Certifications";

export interface Activity {
  id: string;
  title: string;
  slug: string;
  category: ActivityCategory;
  description: string;        /* Brief description shown on hover overlay */
  thumbnailUrl: string;
  thumbnailAlt: string;
  date: string;                /* ISO 8601 — display date for the activity */
  homeFeatured: boolean;       /* Admin toggle: show on home page gallery */
  publishedAt: string;         /* ISO 8601 */
}
