import type { AboutContent } from "@/lib/types";

/** PHASE 1 PLACEHOLDER — replaced by site_content (key: about) in Phase 5. */
export const placeholderAbout: AboutContent = {
  heading: "From Idea to Innovation",
  subHeading: "More than a component shop — a complete innovation ecosystem.",
  body:
    "KalamHub bridges the gap between imagination and implementation by integrating AI-powered electronics assistance, intelligent hardware selection, engineering expertise, and complete development support into a single ecosystem where ideas evolve into deployable solutions.",
  pillars: [
    { icon: "sparkles", title: "AI-Powered", description: "Intelligent guidance at every step of your build." },
    { icon: "wallet", title: "Affordable", description: "Cost-optimized components without compromising quality." },
    { icon: "git-branch", title: "End-to-End", description: "From idea to deployment, fully supported." },
    { icon: "users", title: "Community", description: "Mentorship and peer support throughout your journey." },
  ],
  imageUrl: "/images/hero/placeholder-about.jpg",
  imageAlt: "Students collaborating on an electronics project",
};
