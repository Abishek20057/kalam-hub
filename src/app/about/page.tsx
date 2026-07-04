"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { placeholderAbout } from "@/data/placeholder/about";

const services = [
  "Electronics Projects",
  "Embedded Systems",
  "PCB Design",
  "IoT Development",
  "Workshops",
  "Internship Programs",
  "Project Guidance",
  "Innovation Community",
];

const whyKalamHub = [
  { title: "Practical Learning", description: "Project-driven learning makes abstract concepts easier to understand." },
  { title: "Industry-Oriented Projects", description: "Students build work-ready skills through realistic engineering challenges." },
  { title: "Expert Mentors", description: "Guidance from engineers and educators supports each learning path." },
  { title: "Hands-on Workshops", description: "Interactive sessions make experimentation and debugging part of the process." },
  { title: "Internship Support", description: "Career preparation is built into the learning experience." },
  { title: "Community Learning", description: "Peers and mentors create a collaborative engineering environment." },
];

const milestones = [
  "2026 — Platform Started",
  "Workshops",
  "Projects",
  "Internships",
  "Community Growth",
  "Future AI Platform",
];

const learningProcess = [
  "Idea",
  "Learning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
];

const stats = [
  { label: "Projects", value: "120+" },
  { label: "Students", value: "2k+" },
  { label: "Workshops", value: "40+" },
  { label: "Internships", value: "15+" },
  { label: "PCB Designs", value: "80+" },
  { label: "Community Members", value: "1k+" },
];

const teamMembers = [
  { name: "Founder", role: "Vision & Strategy", image: "/images/about/founder.svg", imageAlt: "Portrait placeholder for the founder" },
  { name: "Mentors", role: "Technical Guidance", image: "/images/about/mentor.svg", imageAlt: "Portrait placeholder for mentors" },
  { name: "Contributors", role: "Community Builders", image: "/images/about/contributor.svg", imageAlt: "Portrait placeholder for contributors" },
  { name: "Students", role: "Learners & Makers", image: "/images/about/student.svg", imageAlt: "Portrait placeholder for students" },
];

const faqs = [
  { question: "What is KalamHub?", answer: "KalamHub is a learning platform focused on electronics, embedded systems, PCB design, IoT, and practical engineering." },
  { question: "Who can join?", answer: "Students, hobbyists, beginners, and aspiring engineers can explore projects and learning opportunities here." },
  { question: "Do you offer workshops?", answer: "Yes. KalamHub includes practical workshops for electronics, PCB design, embedded systems, and IoT." },
  { question: "Is mentorship included?", answer: "Mentorship is part of the experience across workshops, projects, and internships." },
  { question: "Can I contribute?", answer: "Yes. Learners and contributors can participate in the community and share project ideas." },
  { question: "Do you support internships?", answer: "Yes. KalamHub provides structured internship paths with project-based learning." },
  { question: "Are project files available?", answer: "Placeholder project resources and learning materials are part of the platform experience." },
  { question: "Is the platform only for beginners?", answer: "No. It supports beginners, intermediate learners, and people building advanced engineering skills." },
  { question: "How will KalamHub grow?", answer: "The roadmap includes deeper community growth, AI-powered learning support, and more project-based pathways." },
  { question: "How can I get involved?", answer: "Join a workshop, explore a project, or connect with the community to take the next step." },
];

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="bg-[var(--color-bg)]">
      <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_35%)]" />
        <Container>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative grid gap-8 xl:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-6">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <Link href="/" className="hover:text-[var(--color-primary)]">
                  Home
                </Link>
                <Icon name="chevron-right" size={14} />
                <span className="font-medium text-[var(--color-text-primary)]">About</span>
              </nav>
              <Badge variant="category">About</Badge>
              <SectionHeading heading="About KalamHub" subHeading="Empowering Electronics and Embedded Systems learners through practical projects, workshops, internships, and innovation." align="left" />
              <div className="flex flex-wrap gap-3">
                <Button type="button" variant="primary">
                  Explore Projects
                </Button>
                <Button type="button" variant="secondary">
                  Join Workshops
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden p-0">
              <Image
                src={placeholderAbout.imageUrl ?? "/images/about/founder.svg"}
                alt={placeholderAbout.imageAlt ?? "KalamHub illustration"}
                width={900}
                height={600}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-6 md:p-8">
              <SectionHeading heading="Our Story" headingLevel="h2" className="mb-6" />
              <div className="space-y-5 text-base leading-8 text-[var(--color-text-secondary)]">
                <p>KalamHub was created to solve a common challenge in engineering education: learners often have access to theory, but not enough practical guidance to turn ideas into working solutions.</p>
                <p>It brings together projects, workshops, internships, and mentoring in one place so that students can move from curiosity to confidence without getting lost in fragmented resources.</p>
                <p>Our vision is a future where electronics and embedded systems education is hands-on, inclusive, and grounded in real-world engineering practice.</p>
                <p>The roadmap ahead includes deeper community support, more guided programs, and an expanding AI-assisted learning experience for builders and problem-solvers.</p>
              </div>
            </Card>
            <Card className="p-6 md:p-8">
              <SectionHeading heading="Mission & Vision" headingLevel="h2" className="mb-6" />
              <div className="space-y-4">
                <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(255,255,255,0.05))] p-5 backdrop-blur-xl">
                  <p className="text-sm font-semibold uppercase tracking-[var(--tracking-wide)] text-[var(--color-primary)]">Mission</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">To make electronics and embedded systems learning practical, accessible, and inspiring through guided projects and community support.</p>
                </div>
                <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(124,58,237,0.12),rgba(255,255,255,0.05))] p-5 backdrop-blur-xl">
                  <p className="text-sm font-semibold uppercase tracking-[var(--tracking-wide)] text-[var(--color-primary)]">Vision</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">To build a future-ready engineering community where learners turn ideas into impactful technology through collaboration and hands-on experience.</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="What We Do" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service} className="p-5">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <Icon name="sparkles" size={18} />
                  <span className="font-semibold">{service}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Our Learning Process" headingLevel="h2" className="mb-8" />
          <Card className="p-6">
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
              {learningProcess.map((step, index) => (
                <div key={step} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-light)] text-sm font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{step}</span>
                  {index < learningProcess.length - 1 && <Icon name="chevron-down" size={18} className="text-[var(--color-text-secondary)] md:hidden" />}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Why KalamHub" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyKalamHub.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Milestones" headingLevel="h2" className="mb-8" />
          <Card className="p-6">
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
              {milestones.map((milestone, index) => (
                <div key={milestone} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-light)] text-sm font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{milestone}</span>
                  {index < milestones.length - 1 && <Icon name="chevron-down" size={18} className="text-[var(--color-text-secondary)] md:hidden" />}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading heading="Team Preview" headingLevel="h2" className="mb-0" />
            <Link href="/team">
              <Button type="button" variant="secondary">
                Meet Our Team
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden p-0">
                <Image src={member.image} alt={member.imageAlt} width={800} height={500} className="h-56 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Statistics" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <p className="text-3xl font-semibold text-[var(--color-primary)]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="FAQ" headingLevel="h2" className="mb-8" />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-text-primary)]">
                  <span className="mr-2 text-[var(--color-primary)]">{index + 1}.</span>
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-[var(--section-padding-mobile)] md:pb-[var(--section-padding-tablet)] xl:pb-[var(--section-padding-desktop)]">
        <Container>
          <Card className="p-8 text-center">
            <SectionHeading heading="Join KalamHub and Build the Future of Electronics." headingLevel="h2" className="mb-6" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/projects">
                <Button type="button" variant="primary">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/workshops">
                <Button type="button" variant="secondary">
                  Join Workshops
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
