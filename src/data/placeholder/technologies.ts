import type { Technology } from "@/lib/types";

/**
 * KalamHub — Placeholder Technology Data
 * PHASE 1 PLACEHOLDER — replaced by `technologies` DB table in Phase 5.
 */
export const placeholderTechnologies: Technology[] = [
  { id: "tech-001", name: "Arduino", slug: "arduino", icon: "cpu", projectCount: 24, isActive: true, displayOrder: 1 },
  { id: "tech-002", name: "Raspberry Pi", slug: "raspberry-pi", icon: "cpu", projectCount: 16, isActive: true, displayOrder: 2 },
  { id: "tech-003", name: "ESP32", slug: "esp32", icon: "wifi", projectCount: 19, isActive: true, displayOrder: 3 },
  { id: "tech-004", name: "IoT", slug: "iot", icon: "radio-tower", projectCount: 31, isActive: true, displayOrder: 4 },
  { id: "tech-005", name: "AI/ML", slug: "ai-ml", icon: "brain-circuit", projectCount: 12, isActive: true, displayOrder: 5 },
  { id: "tech-006", name: "Robotics", slug: "robotics", icon: "bot", projectCount: 22, isActive: true, displayOrder: 6 },
  { id: "tech-007", name: "PCB Design", slug: "pcb-design", icon: "circuit-board", projectCount: 9, isActive: true, displayOrder: 7 },
];
