export interface WorkshopItem {
  id: string;
  title: string;
  slug: string;
  category: "Basic Electronics" | "PCB Design" | "Embedded Systems" | "IoT" | "Power Electronics";
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  certificateAvailable: boolean;
  image: string;
  imageAlt: string;
  projectsIncluded: string;
  seatsAvailable: string;
}

export interface WorkshopScheduleItem {
  workshop: string;
  date: string;
  duration: string;
  mode: string;
  status: string;
}

export interface WorkshopFaqItem {
  question: string;
  answer: string;
}

export const workshopCategories = [
  "All",
  "Basic Electronics",
  "PCB Design",
  "Embedded Systems",
  "IoT",
  "Power Electronics",
] as const;

export const featuredWorkshop = {
  title: "Basics of Electronics & PCB Design",
  description:
    "A beginner-friendly workshop covering core electronic components, circuit reading, PCB layout basics, and practical prototyping.",
  duration: "6 hours",
  level: "Beginner",
  certificate: "Certificate Included",
  projectsIncluded: "3 Mini Projects",
  seatsAvailable: "24 seats left",
  image: "/images/hero/workshops-hero.svg",
  imageAlt: "Illustration of a hands-on electronics workshop",
};

export const workshopCards: WorkshopItem[] = [
  {
    id: "workshop-basic-electronics",
    title: "Basic Electronics Fundamentals",
    slug: "basic-electronics-fundamentals",
    category: "Basic Electronics",
    description: "Learn the essentials of circuits, resistance, voltage, and safe prototyping with guided experiments.",
    duration: "3 hours",
    level: "Beginner",
    certificateAvailable: true,
    image: "/images/hero/workshop-basic.svg",
    imageAlt: "Basic electronics workshop illustration",
    projectsIncluded: "1 mini project",
    seatsAvailable: "16 seats left",
  },
  {
    id: "workshop-pcb-design",
    title: "PCB Design Essentials",
    slug: "pcb-design-essentials",
    category: "PCB Design",
    description: "Build a strong foundation in schematic design, board layout, and manufacturing-ready output files.",
    duration: "4 hours",
    level: "Intermediate",
    certificateAvailable: true,
    image: "/images/hero/workshop-pcb.svg",
    imageAlt: "PCB design workshop illustration",
    projectsIncluded: "2 PCB layouts",
    seatsAvailable: "12 seats left",
  },
  {
    id: "workshop-embedded-systems",
    title: "Embedded Systems Bootcamp",
    slug: "embedded-systems-bootcamp",
    category: "Embedded Systems",
    description: "Explore microcontrollers, sensor interfacing, and simple firmware development in a guided workshop.",
    duration: "5 hours",
    level: "Intermediate",
    certificateAvailable: true,
    image: "/images/hero/workshop-embedded.svg",
    imageAlt: "Embedded systems workshop illustration",
    projectsIncluded: "2 firmware projects",
    seatsAvailable: "10 seats left",
  },
  {
    id: "workshop-iot",
    title: "IoT Prototyping Studio",
    slug: "iot-prototyping-studio",
    category: "IoT",
    description: "Prototype an IoT solution with ESP32, sensors, and simple connectivity concepts in one hands-on session.",
    duration: "5 hours",
    level: "Intermediate",
    certificateAvailable: true,
    image: "/images/hero/workshop-iot.svg",
    imageAlt: "IoT workshop illustration",
    projectsIncluded: "1 connected prototype",
    seatsAvailable: "8 seats left",
  },
  {
    id: "workshop-power-electronics",
    title: "Power Electronics Lab",
    slug: "power-electronics-lab",
    category: "Power Electronics",
    description: "Understand converters, power stages, and motor control principles through a practical lab-style workshop.",
    duration: "6 hours",
    level: "Advanced",
    certificateAvailable: true,
    image: "/images/hero/workshop-power.svg",
    imageAlt: "Power electronics workshop illustration",
    projectsIncluded: "1 power board project",
    seatsAvailable: "6 seats left",
  },
];

export const learningOutcomes = [
  "Electronic Components",
  "Circuit Analysis",
  "PCB Design",
  "Arduino",
  "ESP32",
  "Sensors",
  "Project Development",
  "Troubleshooting",
];

export const workshopSchedule: WorkshopScheduleItem[] = [
  { workshop: "Basic Electronics Fundamentals", date: "Jul 12, 2026", duration: "3 hrs", mode: "Online", status: "Open" },
  { workshop: "PCB Design Essentials", date: "Jul 19, 2026", duration: "4 hrs", mode: "Hybrid", status: "Open" },
  { workshop: "Embedded Systems Bootcamp", date: "Jul 26, 2026", duration: "5 hrs", mode: "Offline", status: "Limited" },
  { workshop: "IoT Prototyping Studio", date: "Aug 02, 2026", duration: "5 hrs", mode: "Online", status: "Open" },
];

export const studentBenefits = [
  { title: "Certificate", description: "Receive a certificate upon completion of the workshop series." },
  { title: "Hands-on Projects", description: "Build practical projects with guided support throughout the session." },
  { title: "Mentor Support", description: "Get direct support from experienced engineering mentors." },
  { title: "Lifetime Notes", description: "Access curated notes and references long after the class ends." },
  { title: "Community", description: "Join a growing community of makers and learners." },
  { title: "Internship Guidance", description: "Get help preparing for internships and technical portfolios." },
];

export const workshopFaqs: WorkshopFaqItem[] = [
  {
    question: "Who can join these workshops?",
    answer: "The sessions are designed for students, beginners, and engineering enthusiasts with any level of prior experience.",
  },
  {
    question: "Do I need my own laptop?",
    answer: "A laptop is recommended for software-based sessions, but shared lab access is available where applicable.",
  },
  {
    question: "Are the workshops beginner-friendly?",
    answer: "Yes. Each workshop starts with fundamentals and gradually introduces hands-on practice.",
  },
  {
    question: "Will I receive study material?",
    answer: "Yes. Participants receive notes, references, and templates after registration.",
  },
  {
    question: "Can I attend more than one workshop?",
    answer: "Yes. Many learners combine multiple workshops to build a more complete skill set.",
  },
  {
    question: "Do the workshops include projects?",
    answer: "Most workshops include practical mini-projects or guided prototypes for better learning.",
  },
  {
    question: "Are certificates provided?",
    answer: "Yes, certificates are issued for completed workshops and milestone participation.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Refunds are available up to 7 days before the workshop start date.",
  },
  {
    question: "Do I need prior electronics knowledge?",
    answer: "No. The beginner workshops are designed to introduce concepts from the ground up.",
  },
  {
    question: "How do I reserve my seat?",
    answer: "Use the Register button on the workshop card or the featured workshop section to secure your slot.",
  },
];
