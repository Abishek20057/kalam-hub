import type { Activity } from "@/lib/types";

/**
 * KalamHub — Placeholder Activity Data
 * PHASE 1 PLACEHOLDER — replaced by `activities` DB table (where home_featured=true) in Phase 5.
 */
export const placeholderActivities: Activity[] = [
  {
    id: "act-001",
    title: "IoT Bootcamp — Winter Cohort",
    slug: "iot-bootcamp-winter-cohort",
    category: "Workshops",
    description:
      "A 3-day hands-on workshop covering ESP32 fundamentals and cloud connectivity.",
    thumbnailUrl: "/images/activities/placeholder-activity-1.jpg",
    thumbnailAlt: "Students working on ESP32 boards during the IoT bootcamp",
    date: "2026-01-18T00:00:00.000Z",
    homeFeatured: true,
    publishedAt: "2026-01-20T00:00:00.000Z",
  },
  {
    id: "act-002",
    title: "Campus Hackathon 2026",
    slug: "campus-hackathon-2026",
    category: "Hackathons",
    description:
      "48-hour hackathon where teams built AI-assisted hardware prototypes.",
    thumbnailUrl: "/images/activities/placeholder-activity-2.jpg",
    thumbnailAlt: "Team presenting their hackathon prototype",
    date: "2026-02-14T00:00:00.000Z",
    homeFeatured: true,
    publishedAt: "2026-02-16T00:00:00.000Z",
  },
  {
    id: "act-003",
    title: "Summer Internship Program",
    slug: "summer-internship-program",
    category: "Internships",
    description:
      "Six-week internship pairing students with mentors on real client projects.",
    thumbnailUrl: "/images/activities/placeholder-activity-3.jpg",
    thumbnailAlt: "Interns collaborating at the KalamHub workspace",
    date: "2026-05-01T00:00:00.000Z",
    homeFeatured: true,
    publishedAt: "2026-05-03T00:00:00.000Z",
  },
];
