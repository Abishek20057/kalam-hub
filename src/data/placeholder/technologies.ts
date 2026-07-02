import type { Technology } from "@/lib/types";

/**
 * KalamHub — Placeholder Technology Data
 * PHASE 1 PLACEHOLDER — replaced by `technologies` DB table in Phase 5.
 */
export const placeholderTechnologies: Technology[] = [
  {
    id: "tech-001",
    name: "Basic Electronics",
    slug: "basic-electronics",
    icon: "circuit-board",
    description: "Fundamental circuit design, signal flow, and component literacy for hardware-first engineering.",
    projectCount: 42,
    isActive: true,
    displayOrder: 1,
  },
  {
    id: "tech-002",
    name: "Embedded Systems",
    slug: "embedded-systems",
    icon: "microchip",
    description: "Real-time firmware, microcontroller integration, and sensor control for intelligent devices.",
    projectCount: 29,
    isActive: true,
    displayOrder: 2,
  },
  {
    id: "tech-003",
    name: "IoT",
    slug: "iot",
    icon: "wifi",
    description: "Connected systems, wireless data exchange, and edge-to-cloud architectures for smart products.",
    projectCount: 34,
    isActive: true,
    displayOrder: 3,
  },
  {
    id: "tech-004",
    name: "PCB Design",
    slug: "pcb-design",
    icon: "circuit-board",
    description: "Board layout, routing, and manufacturable schematics for robust electronics assemblies.",
    projectCount: 27,
    isActive: true,
    displayOrder: 4,
  },
  {
    id: "tech-005",
    name: "Power Electronics",
    slug: "power-electronics",
    icon: "zap",
    description: "Voltage conversion, efficiency optimization, and safe power delivery for hardware systems.",
    projectCount: 23,
    isActive: true,
    displayOrder: 5,
  },
];
