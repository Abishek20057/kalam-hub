export interface ProjectSearchPlaceholder {
  heading: string;
  subHeading: string;
  searchPlaceholder: string;
  filters: string[];
  popularSearches: string[];
  quickActions: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export const placeholderProjectSearch: ProjectSearchPlaceholder = {
  heading: "Search AI-powered engineering projects",
  subHeading:
    "Find the right innovation path with filters, popular searches, and curated quick actions for fast project discovery.",
  searchPlaceholder: "Search projects, AI tools, hardware builds...",
  filters: [
    "AI",
    "IoT",
    "Robotics",
    "Embedded",
    "PCB",
    "VLSI",
    "Communication",
    "Power Electronics",
  ],
  popularSearches: [
    "AI campus automation",
    "Low-power robotics",
    "Wearable health sensors",
    "Smart energy management",
  ],
  quickActions: [
    {
      id: "action-1",
      title: "AI project discovery",
      description:
        "Browse machine learning and computer vision projects with built-in AI guidance.",
      icon: "cpu",
    },
    {
      id: "action-2",
      title: "Embedded systems labs",
      description:
        "Explore firmware and hardware builds for Arduino, ESP32, and microcontroller design.",
      icon: "terminal",
    },
    {
      id: "action-3",
      title: "PCB & circuit design",
      description:
        "Access step-by-step electronics layouts, schematics, and board-ready ideas.",
      icon: "layers",
    },
  ],
};
