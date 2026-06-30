import type { Project } from "@/lib/types";

/**
 * KalamHub — Placeholder Project Data
 * PHASE 1 PLACEHOLDER — replaced by `projects` DB table (where featured=true) in Phase 5.
 * Component code must never depend on this file directly being "the data";
 * always go through a data-access function so the source can be swapped.
 */
export const placeholderProjects: Project[] = [
  {
    id: "proj-001",
    title: "Smart Line Follower Robot",
    slug: "smart-line-follower-robot",
    description:
      "An Arduino-based robot that follows a line using IR sensors and a PID control loop.",
    thumbnailUrl: "/images/hero/placeholder-project-1.jpg",
    thumbnailAlt: "Smart Line Follower Robot prototype on a workbench",
    category: "Robotics",
    categorySlug: "robotics",
    tags: [
      { label: "Arduino", slug: "arduino" },
      { label: "Robotics", slug: "robotics" },
    ],
    difficulty: "Beginner",
    accessType: "Free",
    featured: true,
    publishedAt: "2026-01-12T00:00:00.000Z",
    viewCount: 482,
  },
  {
    id: "proj-002",
    title: "ESP32 Home Automation Hub",
    slug: "esp32-home-automation-hub",
    description:
      "A WiFi-connected hub for controlling lights and appliances from a mobile app.",
    thumbnailUrl: "/images/hero/placeholder-project-2.jpg",
    thumbnailAlt: "ESP32 home automation circuit board",
    category: "IoT",
    categorySlug: "iot",
    tags: [
      { label: "ESP32", slug: "esp32" },
      { label: "IoT", slug: "iot" },
      { label: "Smart Home", slug: "smart-home" },
    ],
    difficulty: "Intermediate",
    accessType: "Premium",
    featured: true,
    publishedAt: "2026-02-03T00:00:00.000Z",
    viewCount: 915,
  },
  {
    id: "proj-003",
    title: "AI Plant Health Monitor",
    slug: "ai-plant-health-monitor",
    description:
      "Uses a Raspberry Pi camera and a trained model to detect early signs of plant disease.",
    thumbnailUrl: "/images/hero/placeholder-project-3.jpg",
    thumbnailAlt: "Raspberry Pi camera pointed at a plant leaf",
    category: "AI/ML",
    categorySlug: "ai-ml",
    tags: [
      { label: "Raspberry Pi", slug: "raspberry-pi" },
      { label: "AI/ML", slug: "ai-ml" },
    ],
    difficulty: "Advanced",
    accessType: "Premium",
    featured: true,
    publishedAt: "2026-03-21T00:00:00.000Z",
    viewCount: 1204,
  },
  {
    id: "proj-004",
    title: "Custom PCB for Motor Driver",
    slug: "custom-pcb-motor-driver",
    description:
      "A compact dual-motor driver PCB designed for small robotics platforms.",
    thumbnailUrl: "/images/hero/placeholder-project-4.jpg",
    thumbnailAlt: "Custom motor driver PCB on a robot chassis",
    category: "PCB Design",
    categorySlug: "pcb-design",
    tags: [
      { label: "PCB Design", slug: "pcb-design" },
      { label: "Robotics", slug: "robotics" },
    ],
    difficulty: "Advanced",
    accessType: "Free",
    featured: false,
    publishedAt: "2026-04-09T00:00:00.000Z",
    viewCount: 331,
  },
];
