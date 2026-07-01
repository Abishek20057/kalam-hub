import { HeroSection } from "@/components/hero-section";

/**
 * KalamHub — Home Page
 *
 * This file now renders the Hero section only. Navbar and Announcement Bar
 * remain unchanged in the layout. Other homepage sections will be added in
 * later modules.
 */
export default function HomePage() {
  return (
    <main className="bg-[var(--color-bg)]">
      <HeroSection />
    </main>
  );
}
