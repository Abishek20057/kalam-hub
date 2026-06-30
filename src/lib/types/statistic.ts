/**
 * KalamHub — Statistic Type Definition
 *
 * Backs the Statistics section (Architecture Doc 4.7).
 * Data contract between:
 * - Phase 1 placeholder data (/data/placeholder/stats.ts)
 * - Phase 5 database (site_statistics table)
 * - Phase 4 Admin Dashboard (statistics management panel)
 */
export interface Statistic {
  id: string;
  value: number;
  label: string;                /* e.g. "Projects Published" */
  icon?: string;                /* Lucide icon name */
  prefix?: string;               /* e.g. "$" */
  suffix?: string;               /* e.g. "+" */
  displayOrder: number;
}
