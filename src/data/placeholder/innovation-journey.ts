import type { InnovationJourneyContent } from "@/lib/types";

/** PHASE 1 PLACEHOLDER — replaced by site_content (key: journey_steps) in Phase 5. */
export const placeholderInnovationJourney: InnovationJourneyContent = {
  heading: "Innovation Journey",
  subHeading: "Transform your engineering idea into a real product with AI-powered guidance.",
  steps: [
    {
      stepNumber: 1,
      icon: "lightbulb",
      title: "Idea Generation",
      description: "Capture your concept and shape a strong product vision with guided prompts.",
    },
    {
      stepNumber: 2,
      icon: "sparkles",
      title: "AI Requirement Analysis",
      description: "Break down goals, constraints, and system requirements with intelligent support.",
    },
    {
      stepNumber: 3,
      icon: "cpu",
      title: "Component Selection",
      description: "Choose the right electronics, sensors, and modules for your build.",
    },
    {
      stepNumber: 4,
      icon: "circuit-board",
      title: "Circuit Design",
      description: "Draft reliable hardware architecture and interconnect logic with clarity.",
    },
    {
      stepNumber: 5,
      icon: "layers",
      title: "PCB Design",
      description: "Move from schematic ideas into clean, manufacturable PCB layouts.",
    },
    {
      stepNumber: 6,
      icon: "terminal",
      title: "Code Generation",
      description: "Generate firmware and software scaffolding tailored to the selected hardware.",
    },
    {
      stepNumber: 7,
      icon: "test-tube",
      title: "Prototype & Testing",
      description: "Validate the build, refine performance, and solve issues quickly.",
    },
    {
      stepNumber: 8,
      icon: "rocket",
      title: "Deployment & Documentation",
      description: "Package the solution, document the process, and launch with confidence.",
    },
  ],
};
