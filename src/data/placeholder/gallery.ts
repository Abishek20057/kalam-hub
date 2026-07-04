export interface GalleryItem {
  id: string;
  title: string;
  category: "Workshops" | "Basic Electronics" | "PCB Design" | "Embedded Systems" | "IoT" | "Power Electronics" | "Internship" | "Events";
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface GalleryStat {
  label: string;
  value: string;
}

export const galleryCategories = [
  "All",
  "Workshops",
  "Basic Electronics",
  "PCB Design",
  "Embedded Systems",
  "IoT",
  "Power Electronics",
  "Internship",
  "Events",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Workshop Session in Action",
    category: "Workshops",
    date: "2026-06-12",
    description: "Hands-on electronics workshop with students exploring circuit basics.",
    image: "/images/gallery/workshop-session.svg",
    imageAlt: "Students participating in an electronics workshop",
    featured: true,
  },
  {
    id: "gallery-2",
    title: "PCB Design Lab",
    category: "PCB Design",
    date: "2026-05-24",
    description: "A collaborative lab for schematic and board layout practice.",
    image: "/images/gallery/pcb-lab.svg",
    imageAlt: "PCB design lab workspace",
  },
  {
    id: "gallery-3",
    title: "Embedded Systems Build",
    category: "Embedded Systems",
    date: "2026-04-19",
    description: "Prototype development using microcontrollers and sensors.",
    image: "/images/gallery/embedded-build.svg",
    imageAlt: "Embedded systems circuit build",
  },
  {
    id: "gallery-4",
    title: "IoT Prototype Demo",
    category: "IoT",
    date: "2026-03-02",
    description: "A live demo of connected sensing and monitoring concepts.",
    image: "/images/gallery/iot-demo.svg",
    imageAlt: "IoT prototype demonstration",
  },
  {
    id: "gallery-5",
    title: "Power Electronics Lab",
    category: "Power Electronics",
    date: "2026-02-17",
    description: "Students exploring power boards and circuit testing tools.",
    image: "/images/gallery/power-lab.svg",
    imageAlt: "Power electronics workshop setup",
  },
  {
    id: "gallery-6",
    title: "Basic Electronics Practice",
    category: "Basic Electronics",
    date: "2026-01-08",
    description: "Beginner-friendly electronics practice with simple components.",
    image: "/images/gallery/basic-electronics.svg",
    imageAlt: "Basic electronics practice bench",
  },
  {
    id: "gallery-7",
    title: "Internship Experience",
    category: "Internship",
    date: "2025-12-10",
    description: "Interns collaborating on electronics projects and documentation.",
    image: "/images/gallery/internship.svg",
    imageAlt: "Internship team working together",
  },
  {
    id: "gallery-8",
    title: "Innovation Day Event",
    category: "Events",
    date: "2025-11-22",
    description: "A showcase event featuring prototypes, demos, and networking.",
    image: "/images/gallery/event-showcase.svg",
    imageAlt: "Innovation day event display",
  },
];

export const featuredGalleryItems = galleryItems.filter((item) => item.featured);

export const galleryStats: GalleryStat[] = [
  { label: "Photos", value: "240+" },
  { label: "Workshops", value: "18" },
  { label: "Projects", value: "64" },
  { label: "Internships", value: "12" },
  { label: "Certificates", value: "90+" },
];

export const workshopMemories = [
  { title: "Hands-on Build Day", date: "2026-06-12", image: "/images/gallery/memory-build.svg" },
  { title: "PCB Design Review", date: "2026-05-24", image: "/images/gallery/memory-review.svg" },
  { title: "Community Showcase", date: "2026-04-19", image: "/images/gallery/memory-showcase.svg" },
];

export const internshipHighlights = [
  { title: "Mentor Support", image: "/images/gallery/internship-mentors.svg" },
  { title: "Training Session", image: "/images/gallery/internship-training.svg" },
  { title: "Certificate Preview", image: "/images/gallery/certificate-preview.svg" },
];

export const studentProjects = [
  { title: "Smart Lamp Prototype", category: "IoT", studentName: "Ava", image: "/images/gallery/student-project-1.svg" },
  { title: "Circuit Trainer Kit", category: "Basic Electronics", studentName: "Noah", image: "/images/gallery/student-project-2.svg" },
  { title: "Compact Power Board", category: "Power Electronics", studentName: "Mina", image: "/images/gallery/student-project-3.svg" },
];
