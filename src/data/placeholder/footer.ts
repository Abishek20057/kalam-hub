import type { FooterContent } from "@/lib/types";

/** PHASE 1 PLACEHOLDER — replaced by footer_configuration DB table in Phase 5. */
export const placeholderFooter: FooterContent = {
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Project Development", href: "/services/project-development" },
        { label: "PCB Design", href: "/services/pcb-design" },
        { label: "Mentorship", href: "/services/mentorship" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Get in Touch", href: "/contact" },
        { label: "Partnerships", href: "/contact?type=partnership" },
      ],
    },
  ],
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com/company/kalamhub" },
    { platform: "instagram", url: "https://instagram.com/kalamhub" },
    { platform: "github", url: "https://github.com/kalamhub" },
  ],
  copyrightText: `© ${new Date().getFullYear()} KalamHub. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
