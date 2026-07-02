import { HeroSection } from "@/components/hero-section";
import { ProjectSearchSection } from "@/components/project-search/project-search-section";
import { TechnologyExplorerSection } from "@/components/technology-explorer/technology-explorer-section";
import { AboutSection } from "@/components/about-kalamhub/about-section";

/**
 * KalamHub — Home Page
 *
 * This file now renders the Hero section, Project Search section, Technology
 * Explorer section, and About section. Navbar and Announcement Bar remain
 * unchanged in the layout.
 */
export default function HomePage() {
  return (
    <main className="bg-[var(--color-bg)]">
      <HeroSection />
      <ProjectSearchSection />
      <TechnologyExplorerSection />
      <AboutSection />
    </main>
  );
}
