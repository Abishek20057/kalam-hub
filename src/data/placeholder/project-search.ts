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
  searchPlaceholder: "Search Embedded Systems, PCB Design, IoT Projects...",
  filters: [
    "Basic Electronics",
    "Embedded Systems",
    "IoT",
    "PCB Design",
    "Power Electronics",
  ],
  popularSearches: [
    "ESP32 Weather Station",
    "Smart Home Automation",
    "Arduino Projects",
    "PCB Layout Design",
    "IoT Agriculture",
    "Basic Electronics Lab",
  ],
  quickActions: [
    {
      id: "action-1",
      title: "Embedded Project Library",
      description:
        "Discover curated firmware and hardware builds for embedded systems development.",
      icon: "book",
    },
    {
      id: "action-2",
      title: "PCB Design Assistant",
      description:
        "Access guided board layouts, schematic best practices, and manufacturable designs.",
      icon: "layout",
    },
    {
      id: "action-3",
      title: "IoT Project Collection",
      description:
        "Browse connected device ideas and end-to-end IoT build examples.",
      icon: "wifi",
    },
    {
      id: "action-4",
      title: "Electronics Learning Hub",
      description:
        "Find tutorials, labs, and beginner-friendly basics for practical electronics skills.",
      icon: "graduation-cap",
    },
  ],
};
