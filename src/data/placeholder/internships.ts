export interface InternshipItem {
  id: string;
  title: string;
  slug: string;
  category: "Basic Electronics" | "Embedded Systems" | "PCB Design" | "IoT" | "Power Electronics";
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  mode: "Online" | "Offline" | "Hybrid";
  certificate: boolean;
  mentor: string;
  image: string;
  imageAlt: string;
}

export interface InternshipProjectItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface InternshipFaqItem {
  question: string;
  answer: string;
}

export const internshipCategories = [
  "All",
  "Basic Electronics",
  "Embedded Systems",
  "PCB Design",
  "IoT",
  "Power Electronics",
] as const;

export const featuredInternship = {
  title: "Electronics & Embedded Systems Internship",
  description:
    "Work on practical electronics, embedded firmware, and real-world projects under guided mentorship.",
  duration: "8 weeks",
  mode: "Hybrid",
  certificate: "Certificate Included",
  liveProjects: "5 Live Projects",
  mentorSupport: "Dedicated mentor support",
  seatsAvailable: "20 seats left",
  image: "/images/internships/featured-internship.svg",
  imageAlt: "Illustration for the featured internship",
};

export const internshipCards: InternshipItem[] = [
  {
    id: "internship-basic-electronics",
    title: "Basic Electronics Internship",
    slug: "basic-electronics-internship",
    category: "Basic Electronics",
    description: "Learn soldering, circuit assembly, and practical component testing with guided projects.",
    duration: "4 weeks",
    difficulty: "Beginner",
    mode: "Online",
    certificate: true,
    mentor: "Asha Menon",
    image: "/images/internships/basic-electronics.svg",
    imageAlt: "Basic electronics internship cover",
  },
  {
    id: "internship-embedded-systems",
    title: "Embedded Systems Internship",
    slug: "embedded-systems-internship",
    category: "Embedded Systems",
    description: "Explore microcontrollers, debugging, and firmware development with hands-on practice.",
    duration: "6 weeks",
    difficulty: "Intermediate",
    mode: "Hybrid",
    certificate: true,
    mentor: "Rohan Das",
    image: "/images/internships/embedded-systems.svg",
    imageAlt: "Embedded systems internship cover",
  },
  {
    id: "internship-pcb-design",
    title: "PCB Design Internship",
    slug: "pcb-design-internship",
    category: "PCB Design",
    description: "Create schematics, layout boards, and prepare manufacturing-ready design files.",
    duration: "6 weeks",
    difficulty: "Intermediate",
    mode: "Offline",
    certificate: true,
    mentor: "Nisha Rao",
    image: "/images/internships/pcb-design.svg",
    imageAlt: "PCB design internship cover",
  },
  {
    id: "internship-iot",
    title: "IoT Internship",
    slug: "iot-internship",
    category: "IoT",
    description: "Build connected prototypes using sensors, ESP32, and simple cloud integrations.",
    duration: "8 weeks",
    difficulty: "Intermediate",
    mode: "Hybrid",
    certificate: true,
    mentor: "Sanjay K",
    image: "/images/internships/iot.svg",
    imageAlt: "IoT internship cover",
  },
  {
    id: "internship-power-electronics",
    title: "Power Electronics Internship",
    slug: "power-electronics-internship",
    category: "Power Electronics",
    description: "Study power circuits, motor control, and efficient hardware design basics.",
    duration: "7 weeks",
    difficulty: "Advanced",
    mode: "Offline",
    certificate: true,
    mentor: "Meera Pillai",
    image: "/images/internships/power-electronics.svg",
    imageAlt: "Power electronics internship cover",
  },
];

export const learningTracks = [
  "Basic Electronics",
  "Circuit Design",
  "PCB Design",
  "Arduino",
  "ESP32",
  "Sensors",
  "Embedded C",
  "IoT",
  "Project Development",
  "Testing & Debugging",
];

export const roadmapSteps = [
  "Week 1 — Electronics Fundamentals",
  "Week 2 — Components & Circuit Design",
  "Week 3 — Arduino Programming",
  "Week 4 — Embedded Systems",
  "Week 5 — PCB Design",
  "Week 6 — IoT Projects",
  "Week 7 — Final Project",
  "Week 8 — Presentation & Certification",
];

export const liveProjects: InternshipProjectItem[] = [
  { title: "Smart Home Automation", description: "Build automation workflows for lighting and appliance control." },
  { title: "Smart Irrigation System", description: "Create a water management prototype using sensors and automation." },
  { title: "PCB Trainer Kit", description: "Design a compact trainer board for electronics experiments." },
  { title: "Digital Energy Meter", description: "Develop a measurement prototype for energy monitoring." },
  { title: "Line Follower Robot", description: "Implement a simple robotics project with embedded logic." },
  { title: "IoT Weather Station", description: "Collect and display environmental sensor data over a network." },
];

export const internshipBenefits = [
  "Industry Mentors",
  "Hands-on Projects",
  "Certificate",
  "Portfolio Building",
  "Resume Support",
  "Placement Guidance",
  "GitHub Portfolio",
  "Lifetime Learning Community",
];

export const testimonials: TestimonialItem[] = [
  { name: "Aarav", role: "PCB Design Intern", quote: "The program helped me connect theoretical concepts to practical electronics work." },
  { name: "Mira", role: "Embedded Systems Intern", quote: "The mentor support and guided projects made every step easier to understand." },
  { name: "Karan", role: "IoT Intern", quote: "I built my first connected prototype and gained confidence in real workflows." },
];

export const internshipFaqs: InternshipFaqItem[] = [
  { question: "Who can apply for the internship?", answer: "Students and enthusiasts interested in electronics, embedded systems, and practical prototyping can apply." },
  { question: "Is prior experience necessary?", answer: "No. The internship includes beginner-friendly learning paths and guided mentorship." },
  { question: "What is the mode of delivery?", answer: "The internships are offered online, offline, and hybrid depending on the program." },
  { question: "Do I need to buy hardware?", answer: "Some programs may require optional hardware kits for hands-on practice." },
  { question: "Will I get a certificate?", answer: "Yes, successful participants receive a certificate upon completion." },
  { question: "Will I work on live projects?", answer: "Yes. Each internship includes real-world and guided project work." },
  { question: "Is there mentor support?", answer: "Yes, every internship includes mentor support and regular feedback sessions." },
  { question: "What is the expected time commitment?", answer: "Most internships require a few hours each week, depending on the track." },
  { question: "Can I join multiple internships?", answer: "Yes, participants can apply to more than one track if they meet the requirements." },
  { question: "How do I apply?", answer: "Use the Apply Now button on the featured internship or card to begin the process." },
];
