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

const founder = {
  name: "Aarav Sharma",
  role: "Founder & Vision Lead",
  bio: "A builder and educator passionate about turning real-world engineering ideas into practical learning experiences for students.",
  skills: ["Electronics", "Mentorship", "Innovation Strategy"],
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  email: "founder@kalamhub.example",
  image: "/images/team/founder.svg",
  imageAlt: "Portrait placeholder for the founder",
};

const coreTeam = [
  {
    name: "Nisha Rao",
    role: "Electronics Mentor",
    description: "Guides learners through practical circuits, prototyping, and lab-based problem solving.",
    skills: ["Circuit Design", "Prototyping"],
    image: "/images/team/mentor-1.svg",
    imageAlt: "Portrait placeholder for a mentor",
  },
  {
    name: "Rohan Das",
    role: "Embedded Systems Mentor",
    description: "Helps students build confidence with microcontrollers, firmware, and debugging workflows.",
    skills: ["Embedded C", "Debugging"],
    image: "/images/team/mentor-2.svg",
    imageAlt: "Portrait placeholder for an embedded mentor",
  },
  {
    name: "Meera Pillai",
    role: "PCB Design Mentor",
    description: "Supports learners in schematic capture, board layout, and design validation.",
    skills: ["KiCad", "PCB Layout"],
    image: "/images/team/mentor-3.svg",
    imageAlt: "Portrait placeholder for a PCB mentor",
  },
  {
    name: "Sanjay K",
    role: "IoT Mentor",
    description: "Mentors connected projects and sensor-driven systems for real-world learning.",
    skills: ["IoT", "ESP32"],
    image: "/images/team/mentor-4.svg",
    imageAlt: "Portrait placeholder for an IoT mentor",
  },
  {
    name: "Anika Verma",
    role: "Workshop Coordinator",
    description: "Plans workshops, manages community sessions, and makes learning experiences seamless.",
    skills: ["Workshop Design", "Community Support"],
    image: "/images/team/mentor-5.svg",
    imageAlt: "Portrait placeholder for a workshop coordinator",
  },
];

const advisoryBoard = [
  { name: "Dr. S. Menon", designation: "Senior Electronics Professor", expertise: "Embedded Systems", experience: "18 years" },
  { name: "Prof. A. Gupta", designation: "PCB Design Specialist", expertise: "Hardware Design", experience: "14 years" },
  { name: "Mr. T. Joseph", designation: "Innovation Lead", expertise: "IoT and Product Design", experience: "12 years" },
];

const values = [
  "Innovation",
  "Practical Learning",
  "Collaboration",
  "Integrity",
  "Engineering Excellence",
  "Student First",
];

const joinRoles = [
  { title: "Mentor", description: "Guide learners and share industry-relevant knowledge." },
  { title: "Workshop Trainer", description: "Lead hands-on sessions and practical labs." },
  { title: "Content Creator", description: "Create tutorials, notes, and learning resources." },
  { title: "Student Ambassador", description: "Represent KalamHub and help grow the community." },
];

const timeline = [
  "Platform Started",
  "First Workshop",
  "Projects Library",
  "Internship Program",
  "Community Growth",
  "Future AI Platform",
];

const stats = [
  { label: "Mentors", value: "8" },
  { label: "Workshops", value: "40+" },
  { label: "Students", value: "2k+" },
  { label: "Projects", value: "120+" },
  { label: "Community Members", value: "1k+" },
];

const faqs = [
  { question: "Who is part of the KalamHub team?", answer: "The team includes founders, mentors, workshop coordinators, contributors, and advisors supporting learning programs." },
  { question: "How can I join as a mentor?", answer: "You can apply through the Join Our Team section and share your experience and specialization." },
  { question: "Are team roles only technical?", answer: "No. We also welcome content creators, workshop trainers, students, and community contributors." },
  { question: "Is the team open to students?", answer: "Yes. Student ambassadors and learners are a key part of our growing community." },
  { question: "How often do you run workshops?", answer: "Workshops are scheduled regularly, with new sessions added to the calendar throughout the year." },
  { question: "Can I contribute without being a mentor?", answer: "Yes. Contributors can help with content, community initiatives, and program support." },
  { question: "Is there a formal selection process?", answer: "Yes. Each application is reviewed and matched to relevant roles based on experience and interest." },
  { question: "What kinds of expertise are welcome?", answer: "Electronics, embedded systems, PCB design, IoT, workshops, content creation, and community support are all welcome." },
  { question: "Do you support remote team members?", answer: "Yes. Many roles can be supported through remote collaboration and online engagement." },
  { question: "How can I contact the team?", answer: "Use the contact option in the final CTA or reach out through the placeholder contact details shared in the team section." },
];

export default function TeamPage() {
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
                <span className="font-medium text-[var(--color-text-primary)]">Team</span>
              </nav>
              <Badge variant="category">Team</Badge>
              <SectionHeading heading="Meet the KalamHub Team" subHeading="The passionate people building an engineering innovation ecosystem for students and future engineers." align="left" />
              <div className="flex flex-wrap gap-3">
                <Button type="button" variant="primary">
                  Join as Mentor
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden p-0">
              <Image src="/images/team/hero-team.svg" alt="Illustration of the KalamHub team" width={900} height={600} className="h-full w-full object-cover" loading="eager" />
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Founder" headingLevel="h2" className="mb-8" />
          <Card className="overflow-hidden p-0">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Image src={founder.image} alt={founder.imageAlt} width={800} height={500} className="h-full w-full object-cover" loading="lazy" />
              <div className="p-6 md:p-8">
                <Badge variant="category">Founder</Badge>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text-primary)]">{founder.name}</h3>
                <p className="mt-2 text-lg font-medium text-[var(--color-primary)]">{founder.role}</p>
                <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">{founder.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-sm text-[var(--color-text-secondary)]">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={founder.linkedin} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-text-primary)]">
                    <Icon name="linkedin" size={16} />
                    LinkedIn
                  </a>
                  <a href={founder.github} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-text-primary)]">
                    <Icon name="github" size={16} />
                    GitHub
                  </a>
                  <a href={`mailto:${founder.email}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-text-primary)]">
                    <Icon name="mail" size={16} />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Core Team" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreTeam.map((member, index) => (
              <motion.article
                key={member.name}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-[var(--shadow-sm)]"
              >
                <Image src={member.image} alt={member.imageAlt} width={800} height={500} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <Badge variant="category">{member.role}</Badge>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{member.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3 text-[var(--color-text-secondary)]">
                    <Icon name="linkedin" size={16} />
                    <Icon name="github" size={16} />
                    <Icon name="mail" size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Advisory Board" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-3">
            {advisoryBoard.map((member) => (
              <Card key={member.name} className="p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--color-primary)]">{member.designation}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">Expertise: {member.expertise}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">Experience: {member.experience}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Our Values" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value} className="p-6">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <Icon name="sparkles" size={18} />
                  <span className="font-semibold">{value}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Join Our Team" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {joinRoles.map((role) => (
              <Card key={role.title} className="p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{role.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{role.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button type="button" variant="primary">
              Apply to Join
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Team Timeline" headingLevel="h2" className="mb-8" />
          <Card className="p-6">
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
              {timeline.map((step, index) => (
                <div key={step} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-light)] text-sm font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{step}</span>
                  {index < timeline.length - 1 && <Icon name="chevron-down" size={18} className="text-[var(--color-text-secondary)] md:hidden" />}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Team Statistics" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
            <SectionHeading heading="Become Part of the KalamHub Team" headingLevel="h2" className="mb-6" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button type="button" variant="primary">
                Join as Mentor
              </Button>
              <Button type="button" variant="secondary">
                Contact Us
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
