export interface AboutKalamHubPlaceholder {
  heading: string;
  subHeading: string;
  missionTitle: string;
  visionTitle: string;
  description: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  workflowSteps: Array<{
    id: string;
    label: string;
    description: string;
    icon: string;
  }>;
  coreValues: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export const placeholderAboutKalamHub: AboutKalamHubPlaceholder = {
  heading: "About KalamHub",
  subHeading:
    "An AI-powered engineering innovation ecosystem built to help teams turn ideas into deployable products with confidence.",
  missionTitle: "Our Mission",
  visionTitle: "Our Vision",
  description:
    "KalamHub empowers makers, students, and startups with a unified platform for ideation, AI-powered analysis, component selection, circuit design, and real-world deployment—so every innovation journey is faster, smarter, and more reliable.",
  ctaPrimaryText: "Learn More",
  ctaPrimaryHref: "/about",
  ctaSecondaryText: "Join Community",
  ctaSecondaryHref: "/community",
  workflowSteps: [
    {
      id: "step-idea",
      label: "Idea",
      description: "Start with a bold concept and define the problem to solve.",
      icon: "lightbulb",
    },
    {
      id: "step-analysis",
      label: "AI Analysis",
      description: "Use smart insights to validate feasibility and suggest optimizations.",
      icon: "brain-circuit",
    },
    {
      id: "step-components",
      label: "Component Selection",
      description: "Choose best-fit hardware and firmware components for your build.",
      icon: "package",
    },
    {
      id: "step-circuit",
      label: "Circuit Design",
      description: "Map the electronics architecture with precision and clarity.",
      icon: "circuit-board",
    },
    {
      id: "step-pcb",
      label: "PCB Design",
      description: "Create board-ready layouts and manufacturable schematics.",
      icon: "hard-drive",
    },
    {
      id: "step-code",
      label: "Code Generation",
      description: "Generate firmware and software scaffolding automatically.",
      icon: "code",
    },
    {
      id: "step-prototype",
      label: "Prototype",
      description: "Build a working model to test key interactions and behaviors.",
      icon: "tool",
    },
    {
      id: "step-testing",
      label: "Testing",
      description: "Validate performance, reliability, and real-world readiness.",
      icon: "check-circle",
    },
    {
      id: "step-deployment",
      label: "Deployment",
      description: "Launch your innovation into the market, classroom, or maker community.",
      icon: "rocket",
    },
  ],
  coreValues: [
    {
      id: "value-innovation",
      title: "Innovation",
      description: "We drive creative solutions by combining AI, design, and engineering expertise.",
      icon: "sparkles",
    },
    {
      id: "value-collaboration",
      title: "Collaboration",
      description: "We foster community-driven development and shared learning across teams.",
      icon: "users",
    },
    {
      id: "value-learning",
      title: "Learning",
      description: "We prioritize growth through hands-on experimentation and knowledge sharing.",
      icon: "book-open",
    },
    {
      id: "value-engineering",
      title: "Engineering Excellence",
      description: "We deliver robust systems with high standards for quality and performance.",
      icon: "award",
    },
  ],
};
