"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  placeholderInternships
} from "@/data/placeholder/internships";

// Placeholder data that was missing from imports
const featuredInternship = {
  title: "Embedded Systems & IoT",
  description: "A comprehensive program covering everything from basic electronics to advanced IoT applications.",
  image: "/images/internships/featured.svg",
  imageAlt: "Featured internship illustration",
  mode: "Online + Offline",
  certificate: "Yes",
  duration: "3-6 Months",
  liveProjects: "3+ Live Projects",
  mentorSupport: "Dedicated Support",
  seatsAvailable: "Limited Seats",
};
const internshipBenefits = ["Live Projects", "Mentor Support", "Career Guidance", "Certificate of Completion", "Skill Development", "Networking", "Real-world Experience", "Portfolio Building"];
const internshipCards = placeholderInternships.map(p => ({...p, id: p.id, image: "/images/internships/card-placeholder.svg", imageAlt: p.title, difficulty: "Beginner", mentor: "Industry Expert", category: "Embedded Systems", description: `An internship for ${p.title}`, certificate: true, mode: p.location}));
const internshipCategories = ["All", "Embedded Systems", "PCB Design", "IoT", "Frontend", "Data Science"];
const internshipFaqs = [
  { question: "Is this internship paid?", answer: "This is a learning-focused program; some roles may offer stipends based on performance." },
  { question: "What are the prerequisites?", answer: "A basic understanding of electronics and a passion for learning are required." },
  { question: "How do I apply?", answer: "Click the 'Apply Now' button on the featured internship or individual internship cards." },
];
const learningTracks = ["Electronics", "Embedded C", "PCB Design", "IoT", "Project Building"];
const liveProjects = [
  { title: "Smart Home Automation", description: "Develop an IoT-based system to control home appliances." },
  { title: "Wearable Health Monitor", description: "Design a device to track vital signs." },
  { title: "Automated Gardening System", description: "Build a system to automate plant watering and monitoring." },
];
const roadmapSteps = ["Foundation", "Skill Building", "Project Work", "Mentorship", "Career Prep"];
const testimonials = [
  { name: "Priya S.", role: "Former Intern", quote: "The hands-on project experience was invaluable for my career." },
  { name: "Rahul M.", role: "Former Intern", quote: "I learned more in 3 months here than in 2 years of college." },
  { name: "Anjali K.", role: "Former Intern", quote: "The mentorship and guidance helped me land my dream job." },
];

export default function InternshipsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<(typeof internshipCategories)[number]>("All");

  const filteredInternships = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return internshipCards.filter((internship) => {
      const matchesCategory = selectedCategory === "All" || internship.category === selectedCategory;
      const matchesSearch =
        query.length === 0 ||
        [internship.title, internship.description, internship.category, internship.mentor]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="bg-[var(--color-bg)]">
      <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_35%)]" />
        <Container>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative grid gap-8 xl:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-6">
              <Badge variant="category">Internships</Badge>
              <SectionHeading
                heading="Electronics & Embedded Systems Internship Program"
                subHeading="Gain hands-on industry experience through practical training, real-world projects, PCB design, embedded systems, IoT, and electronics development."
                align="left"
              />
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <label htmlFor="internship-search" className="sr-only">
                  Search internships
                </label>
                <div className="relative flex-1">
                  <Icon name="search" size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                  <input
                    id="internship-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search internships"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {internshipCategories.filter((category) => category !== "All").map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${selectedCategory === category ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)]"}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Card className="overflow-hidden p-0">
              <Image
                src={featuredInternship.image}
                alt={featuredInternship.imageAlt}
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
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="category">Featured Internship</Badge>
                  <Badge variant="new">{featuredInternship.mode}</Badge>
                  <Badge variant="free">{featuredInternship.certificate}</Badge>
                </div>
                <SectionHeading heading={featuredInternship.title} headingLevel="h2" className="mb-0" />
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">{featuredInternship.description}</p>
                <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text-secondary)]">
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredInternship.duration}</span>
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredInternship.liveProjects}</span>
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredInternship.mentorSupport}</span>
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredInternship.seatsAvailable}</span>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
                <Button type="button" variant="primary">
                  Apply Now
                </Button>
                <Button type="button" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Internship Categories" headingLevel="h2" className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {internshipCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-border)] bg-[var(--color-surface)]/80 text-[var(--color-text-secondary)]"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Internship Cards" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredInternships.map((internship, index) => (
              <motion.article
                key={internship.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-[var(--shadow-sm)]"
              >
                <Image src={internship.image} alt={internship.imageAlt} width={800} height={500} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="category">{internship.category}</Badge>
                    <Badge variant="difficulty">{internship.difficulty}</Badge>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">{internship.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{internship.description}</p>
                  <div className="mt-4 grid gap-2 text-sm text-[var(--color-text-secondary)]">
                    <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium text-[var(--color-text-primary)]">{internship.duration}</span></div>
                    <div className="flex items-center justify-between"><span>Mode</span><span className="font-medium text-[var(--color-text-primary)]">{internship.mode}</span></div>
                    <div className="flex items-center justify-between"><span>Certificate</span><span className="font-medium text-[var(--color-text-primary)]">{internship.certificate ? "Included" : "Not Included"}</span></div>
                    <div className="flex items-center justify-between"><span>Mentor</span><span className="font-medium text-[var(--color-text-primary)]">{internship.mentor}</span></div>
                  </div>
                  <div className="mt-6">
                    <Button type="button" variant="secondary" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="What You Will Learn" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {learningTracks.map((track) => (
              <Card key={track} className="p-5">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <Icon name="sparkles" size={18} />
                  <span className="font-semibold">{track}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Internship Roadmap" headingLevel="h2" className="mb-8" />
          <Card className="p-6">
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
              {roadmapSteps.map((step, index) => (
                <div key={step} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-light)] text-sm font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{step}</span>
                  {index < roadmapSteps.length - 1 && <Icon name="chevron-down" size={18} className="text-[var(--color-text-secondary)] md:hidden" />}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Live Projects" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {liveProjects.map((project) => (
              <Card key={project.title} className="p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{project.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Internship Benefits" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {internshipBenefits.map((benefit) => (
              <Card key={benefit} className="p-6">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <Icon name="check-circle-2" size={18} />
                  <h3 className="text-base font-semibold">{benefit}</h3>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Student Testimonials" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <p className="text-sm leading-7 text-[var(--color-text-secondary)]">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-[var(--color-text-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Internship FAQ" headingLevel="h2" className="mb-8" />
          <div className="space-y-3">
            {internshipFaqs.map((faq, index) => (
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
            <SectionHeading heading="Start Your Engineering Career With KalamHub" headingLevel="h2" className="mb-6" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button type="button" variant="primary">
                Apply Now
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
