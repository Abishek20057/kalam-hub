import type { Statistic } from "@/lib/types";

/**
 * KalamHub — Placeholder Statistics Data
 * PHASE 1 PLACEHOLDER — replaced by `site_statistics` DB table in Phase 5.
 */
export const placeholderStats: Statistic[] = [
  { id: "stat-001", value: 120, label: "Projects Published", icon: "folder-kanban", suffix: "+", displayOrder: 1 },
  { id: "stat-002", value: 850, label: "Students Helped", icon: "users", suffix: "+", displayOrder: 2 },
  { id: "stat-003", value: 14, label: "Workshops Conducted", icon: "presentation", displayOrder: 3 },
  { id: "stat-004", value: 7, label: "Technologies Supported", icon: "layers", displayOrder: 4 },
];
