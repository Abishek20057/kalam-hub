/**
 * KalamHub — Technology Type Definition
 *
 * Backs the Explore Technologies section (Architecture Doc 4.5).
 * Data contract between:
 * - Phase 1 placeholder data (/data/placeholder/technologies.ts)
 * - Phase 5 database (technologies table)
 * - Phase 4 Admin Dashboard (technology management panel)
 *
 * Never change field names without updating all three layers.
 */
export interface Technology {
  id: string;
  name: string;                 /* e.g. "Arduino", "ESP32", "IoT" */
  slug: string;                 /* used in /projects?tech=[slug] */
  icon: string;                 /* Lucide icon name OR custom SVG sprite id */
  description: string;          /* short summary shown in the Explorer cards */
  projectCount: number;         /* DB-derived, cached 1hr per Architecture Doc 4.5 */
  isActive: boolean;            /* Admin toggle: show/hide chip */
  displayOrder: number;
}
