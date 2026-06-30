import type { TeamMember } from "@/lib/types";

/**
 * KalamHub — Placeholder Team Data
 * PHASE 1 PLACEHOLDER — replaced by `team_members` DB table (where home_visible=true) in Phase 5.
 * Names/roles below are illustrative only — replace with real team data
 * before this leaves Phase 1 placeholder status.
 */
export const placeholderTeam: TeamMember[] = [
  {
    id: "team-001",
    name: "Founder Name",
    slug: "founder-name",
    role: "Founder & CEO",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/placeholder" },
    ],
    homeVisible: true,
    displayOrder: 1,
  },
  {
    id: "team-002",
    name: "Co-Founder Name",
    slug: "co-founder-name",
    role: "Co-Founder & CTO",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/placeholder" },
      { platform: "github", url: "https://github.com/placeholder" },
    ],
    homeVisible: true,
    displayOrder: 2,
  },
];
