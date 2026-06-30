/**
 * KalamHub — Team Member Type Definition
 *
 * Backs the Team section (Architecture Doc 4.12).
 * Data contract between:
 * - Phase 1 placeholder data (/data/placeholder/team.ts)
 * - Phase 5 database (team_members table, where home_visible=true)
 * - Phase 4 Admin Dashboard (team management panel)
 *
 * Never change field names without updating all three layers.
 */
export type SocialPlatform =
  | "linkedin"
  | "github"
  | "twitter"
  | "instagram"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio?: string;                 /* Full bio — Phase 2 team detail page */
  photoUrl?: string;            /* Optional — Avatar falls back to initials */
  photoAlt?: string;
  socialLinks: SocialLink[];
  homeVisible: boolean;         /* Admin toggle: show subset on home page */
  displayOrder: number;         /* Admin-controlled ordering */
}
