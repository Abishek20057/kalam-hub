export interface ProjectDetailComponent {
  name: string;
  quantity: string;
  estimatedCost: string;
  purchaseLink: string;
}

export interface ProjectDetailData {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  accessType: "Free" | "Premium";
  duration: string;
  shortDescription: string;
  bannerImage: string;
  bannerAlt: string;
  problemStatement: string;
  solution: string;
  applications: string[];
  learningOutcomes: string[];
  components: ProjectDetailComponent[];
  circuitDiagramImage: string;
  circuitDiagramAlt: string;
  blockDiagramImage: string;
  blockDiagramAlt: string;
  workflow: string[];
  softwareUsed: Array<{ name: string; description: string }>;
  downloads: Array<{ label: string; href: string }>;
  relatedProjectSlugs: string[];
}

export const projectDetailPlaceholderData: ProjectDetailData[] = [
  {
    id: "detail-basic-electronics-trainer-kit",
    title: "Basic Electronics Trainer Kit",
    slug: "basic-electronics-trainer-kit",
    category: "Basic Electronics",
    categorySlug: "basic-electronics",
    difficulty: "Beginner",
    accessType: "Free",
    duration: "3 weeks",
    shortDescription:
      "A beginner-friendly electronics project that teaches circuit building, soldering, and component testing through a practical training kit.",
    bannerImage: "/images/hero/project-banner.svg",
    bannerAlt: "Banner for the basic electronics trainer kit",
    problemStatement:
      "Many learners struggle to connect theory to practice because beginner electronics experiments are often scattered, unsafe, or too expensive to assemble.",
    solution:
      "This trainer kit bundles a compact power supply, breadboard layout, and guided experiments into one accessible platform for hands-on learning.",
    applications: [
      "Classroom demonstrations",
      "DIY electronics clubs",
      "First-year engineering labs",
    ],
    learningOutcomes: [
      "Understand resistors, LEDs, switches, and simple circuits",
      "Practice safe soldering and wiring habits",
      "Build confidence with breadboard prototyping",
    ],
    components: [
      { name: "Breadboard", quantity: "1", estimatedCost: "$6", purchaseLink: "#" },
      { name: "9V Battery Clip", quantity: "1", estimatedCost: "$2", purchaseLink: "#" },
      { name: "LED Pack", quantity: "1", estimatedCost: "$3", purchaseLink: "#" },
      { name: "Resistor Kit", quantity: "1", estimatedCost: "$4", purchaseLink: "#" },
    ],
    circuitDiagramImage: "/images/hero/project-circuit.svg",
    circuitDiagramAlt: "Circuit diagram placeholder for the trainer kit",
    blockDiagramImage: "/images/hero/project-block-diagram.svg",
    blockDiagramAlt: "Block diagram placeholder for the trainer kit",
    workflow: [
      "Idea",
      "Components",
      "Circuit Design",
      "Programming",
      "Testing",
      "Deployment",
    ],
    softwareUsed: [
      { name: "Arduino IDE", description: "Serial debugging and testing workflows" },
      { name: "KiCad", description: "Schematic drafting and board planning" },
      { name: "EasyEDA", description: "Quick layout prototyping" },
      { name: "VS Code", description: "Documentation and code edits" },
      { name: "PlatformIO", description: "Embedded build and deployment" },
    ],
    downloads: [
      { label: "Circuit Diagram", href: "#" },
      { label: "PCB Files", href: "#" },
      { label: "Source Code", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "PPT", href: "#" },
      { label: "Datasheet", href: "#" },
    ],
    relatedProjectSlugs: [
      "arduino-home-automation",
      "esp32-smart-agriculture",
      "portable-pcb-power-supply",
    ],
  },
  {
    id: "detail-arduino-home-automation",
    title: "Arduino Home Automation",
    slug: "arduino-home-automation",
    category: "Embedded Systems",
    categorySlug: "embedded-systems",
    difficulty: "Beginner",
    accessType: "Free",
    duration: "4 weeks",
    shortDescription:
      "An introductory automation project that uses Arduino to control lighting and monitor simple environmental sensors.",
    bannerImage: "/images/hero/project-banner.svg",
    bannerAlt: "Banner for the Arduino home automation project",
    problemStatement:
      "Home automation projects can feel overly complex for beginners and often require expensive platforms or proprietary software.",
    solution:
      "This project uses an Arduino board and open-source tooling so learners can control outputs safely and understand each step of the workflow.",
    applications: [
      "Small home automation prototypes",
      "IoT learning kits",
      "Starter embedded projects",
    ],
    learningOutcomes: [
      "Wire digital inputs and outputs",
      "Program timer and sensor logic",
      "Understand real-time control loops",
    ],
    components: [
      { name: "Arduino Uno", quantity: "1", estimatedCost: "$20", purchaseLink: "#" },
      { name: "Relay Module", quantity: "1", estimatedCost: "$4", purchaseLink: "#" },
      { name: "Motion Sensor", quantity: "1", estimatedCost: "$5", purchaseLink: "#" },
      { name: "LED Strip", quantity: "1", estimatedCost: "$8", purchaseLink: "#" },
    ],
    circuitDiagramImage: "/images/hero/project-circuit.svg",
    circuitDiagramAlt: "Circuit diagram placeholder for the Arduino automation project",
    blockDiagramImage: "/images/hero/project-block-diagram.svg",
    blockDiagramAlt: "Block diagram placeholder for the Arduino automation project",
    workflow: [
      "Idea",
      "Components",
      "Circuit Design",
      "Programming",
      "Testing",
      "Deployment",
    ],
    softwareUsed: [
      { name: "Arduino IDE", description: "Firmware development and upload" },
      { name: "KiCad", description: "Board and schematic exploration" },
      { name: "PlatformIO", description: "Build and flash workflows" },
      { name: "VS Code", description: "Notes and documentation" },
    ],
    downloads: [
      { label: "Circuit Diagram", href: "#" },
      { label: "Source Code", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Datasheet", href: "#" },
    ],
    relatedProjectSlugs: [
      "basic-electronics-trainer-kit",
      "esp32-smart-agriculture",
      "dc-motor-speed-controller",
    ],
  },
  {
    id: "detail-esp32-smart-agriculture",
    title: "ESP32 Smart Agriculture",
    slug: "esp32-smart-agriculture",
    category: "IoT",
    categorySlug: "iot",
    difficulty: "Intermediate",
    accessType: "Premium",
    duration: "5 weeks",
    shortDescription:
      "A connected agriculture system that monitors soil moisture and uses automation to support irrigation decisions.",
    bannerImage: "/images/hero/project-banner.svg",
    bannerAlt: "Banner for the ESP32 smart agriculture project",
    problemStatement:
      "Small farms and learning labs need monitoring systems that are affordable yet practical without relying on costly commercial hardware.",
    solution:
      "The project combines an ESP32, soil sensor, and cloud-ready dashboard to collect readings and automate irrigation routines.",
    applications: [
      "Greenhouse monitoring",
      "Agriculture education labs",
      "Prototype IoT deployments",
    ],
    learningOutcomes: [
      "Connect sensors to wireless microcontrollers",
      "Design a reliable data collection flow",
      "Explain simple automation logic for agriculture",
    ],
    components: [
      { name: "ESP32 Board", quantity: "1", estimatedCost: "$12", purchaseLink: "#" },
      { name: "Soil Moisture Sensor", quantity: "1", estimatedCost: "$8", purchaseLink: "#" },
      { name: "Water Pump", quantity: "1", estimatedCost: "$14", purchaseLink: "#" },
      { name: "Relay Module", quantity: "1", estimatedCost: "$4", purchaseLink: "#" },
    ],
    circuitDiagramImage: "/images/hero/project-circuit.svg",
    circuitDiagramAlt: "Circuit diagram placeholder for the smart agriculture project",
    blockDiagramImage: "/images/hero/project-block-diagram.svg",
    blockDiagramAlt: "Block diagram placeholder for the smart agriculture project",
    workflow: [
      "Idea",
      "Components",
      "Circuit Design",
      "Programming",
      "Testing",
      "Deployment",
    ],
    softwareUsed: [
      { name: "PlatformIO", description: "Firmware workflow and deployment" },
      { name: "VS Code", description: "Project planning and code editing" },
      { name: "EasyEDA", description: "Quick schematic iterations" },
      { name: "KiCad", description: "Detailed PCB concepts" },
    ],
    downloads: [
      { label: "Circuit Diagram", href: "#" },
      { label: "PCB Files", href: "#" },
      { label: "Source Code", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "PPT", href: "#" },
    ],
    relatedProjectSlugs: [
      "basic-electronics-trainer-kit",
      "arduino-home-automation",
      "iot-water-tank-monitoring",
    ],
  },
  {
    id: "detail-portable-pcb-power-supply",
    title: "Portable PCB Power Supply",
    slug: "portable-pcb-power-supply",
    category: "PCB Design",
    categorySlug: "pcb-design",
    difficulty: "Intermediate",
    accessType: "Free",
    duration: "4 weeks",
    shortDescription:
      "A compact, portable power supply board designed for prototyping and electronics experimentation.",
    bannerImage: "/images/hero/project-banner.svg",
    bannerAlt: "Banner for the portable PCB power supply project",
    problemStatement:
      "Prototype work often needs a dependable power source but existing options are bulky or too generic for focused experiments.",
    solution:
      "This board provides a compact regulated source with a clear layout that makes testing and debugging simpler for learners and makers.",
    applications: [
      "Prototype benches",
      "Lab power supplies",
      "Portable electronics testing",
    ],
    learningOutcomes: [
      "Read and interpret schematic symbols",
      "Understand voltage regulation concepts",
      "Practice PCB planning and layout thinking",
    ],
    components: [
      { name: "Voltage Regulator", quantity: "1", estimatedCost: "$2", purchaseLink: "#" },
      { name: "Capacitor Set", quantity: "1", estimatedCost: "$3", purchaseLink: "#" },
      { name: "USB Connector", quantity: "1", estimatedCost: "$1", purchaseLink: "#" },
      { name: "Switch", quantity: "1", estimatedCost: "$1", purchaseLink: "#" },
    ],
    circuitDiagramImage: "/images/hero/project-circuit.svg",
    circuitDiagramAlt: "Circuit diagram placeholder for the power supply project",
    blockDiagramImage: "/images/hero/project-block-diagram.svg",
    blockDiagramAlt: "Block diagram placeholder for the power supply project",
    workflow: [
      "Idea",
      "Components",
      "Circuit Design",
      "Programming",
      "Testing",
      "Deployment",
    ],
    softwareUsed: [
      { name: "KiCad", description: "PCB layout and schematic capture" },
      { name: "EasyEDA", description: "Rapid iteration and collaboration" },
      { name: "VS Code", description: "Build notes and documentation" },
    ],
    downloads: [
      { label: "Circuit Diagram", href: "#" },
      { label: "PCB Files", href: "#" },
      { label: "Documentation", href: "#" },
    ],
    relatedProjectSlugs: [
      "basic-electronics-trainer-kit",
      "esp32-smart-agriculture",
      "dc-motor-speed-controller",
    ],
  },
];

export function getProjectDetailBySlug(slug: string): ProjectDetailData | undefined {
  return projectDetailPlaceholderData.find((project) => project.slug === slug);
}

export function getAllProjectDetailSlugs() {
  return projectDetailPlaceholderData.map((project) => ({ slug: project.slug }));
}
