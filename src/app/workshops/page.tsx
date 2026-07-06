"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  placeholderWorkshops
} from "@/data/placeholder/workshops";

// Placeholder data that was missing from imports
const featuredWorkshop = {
  title: "Hands-on PCB Design",
  description: "Learn to design and manufacture your own printed circuit boards from scratch.",
  image: "/images/workshops/featured.svg",
  imageAlt: "Featured workshop illustration",
  level: "Beginner",
  certificate: "Certificate Included",
  duration: "2 Days",
  projectsIncluded: "1+ Project",
  seatsAvailable: "30 Seats",
};
const learningOutcomes = ["Schematic Design", "PCB Layout", "Component Selection", "Gerber Files"];
const studentBenefits = [
  { title: "Practical Skills", description: "Gain skills that are directly applicable in the industry." },
  { title: "Portfolio Project", description: "Build a project to showcase to potential employers." },
  { title: "Expert Mentorship", description: "Learn from experienced engineers and mentors." },
];
const workshopCards = placeholderWorkshops.map(w => ({...w, id: w.id, image: `/images/workshops/card-${w.id}.svg`, imageAlt: w.title, category: "PCB Design", level: "Beginner", description: `A workshop on ${w.title}`, duration: "2 Days", projectsIncluded: "1 Project", seatsAvailable: "30 Seats", certificateAvailable: true}));
const workshopCategories = ["All", "PCB Design", "Embedded C", "IoT", "Robotics"];
const workshopFaqs = [
  { question: "Are the workshops online or offline?", answer: "We offer both online and offline workshops. Please check the details for each specific workshop." },
  { question: "Is any prior experience required?", answer: "Most of our workshops are beginner-friendly. Specific prerequisites, if any, will be mentioned." },
];
const workshopSchedule = placeholderWorkshops.map(w => ({...w, workshop: w.title, date: new Date(w.date).toLocaleDateString(), duration: "2 Days", mode: "Online", status: w.status}));

export default function WorkshopsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<(typeof workshopCategories)[number]>("All");

  const filteredWorkshops = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return workshopCards.filter((workshop) => {
      const matchesCategory = selectedCategory === "All" || workshop.category === selectedCategory;
      const matchesSearch =
        query.length === 0 ||
        [workshop.title, workshop.description, workshop.category]
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
            className="relative grid gap-8 xl:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-6">
              <Badge variant="category">Workshops</Badge>
              <SectionHeading
                heading="Electronics & PCB Design Workshops"
                subHeading="Hands-on workshops designed for students, beginners, and engineering enthusiasts."
                align="left"
              />
              <div className="relative max-w-2xl rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 shadow-[var(--shadow-sm)] backdrop-blur-xl">
                <label htmlFor="workshop-search" className="sr-only">
                  Search workshops
                </label>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="relative flex-1">
                    <Icon name="search" size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                    <input
                      id="workshop-search"
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search workshops"
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>
                  <select
                    aria-label="Filter workshops by category"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value as (typeof workshopCategories)[number])}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  >
                    {workshopCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden p-0">
              <Image
                src={featuredWorkshop.image}
                alt={featuredWorkshop.imageAlt}
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="category">Featured Workshop</Badge>
                  <Badge variant="difficulty">{featuredWorkshop.level}</Badge>
                  <Badge variant="new">{featuredWorkshop.certificate}</Badge>
                </div>
                <SectionHeading heading={featuredWorkshop.title} headingLevel="h2" className="mb-0" />
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">{featuredWorkshop.description}</p>
                <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text-secondary)]">
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredWorkshop.duration}</span>
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredWorkshop.projectsIncluded}</span>
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">{featuredWorkshop.seatsAvailable}</span>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
                <Button type="button" variant="primary">
                  Register Now
                </Button>
                <Button type="button" variant="secondary">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Workshop Cards" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredWorkshops.map((workshop, index) => (
              <motion.article
                key={workshop.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-[var(--shadow-sm)]"
              >
                <Image src={workshop.image} alt={workshop.imageAlt} width={800} height={500} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="category">{workshop.category}</Badge>
                    <Badge variant="difficulty">{workshop.level}</Badge>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">{workshop.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{workshop.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="rounded-full bg-[var(--color-bg)] px-3 py-1">{workshop.duration}</span>
                    <span className="rounded-full bg-[var(--color-bg)] px-3 py-1">{workshop.projectsIncluded}</span>
                    <span className="rounded-full bg-[var(--color-bg)] px-3 py-1">{workshop.seatsAvailable}</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                      {workshop.certificateAvailable ? "Certificate Available" : "No Certificate"}
                    </span>
                    <Button type="button" variant="secondary" size="sm">
                      Register
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
          <SectionHeading heading="Learning Outcomes" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningOutcomes.map((item) => (
              <Card key={item} className="p-5">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <Icon name="sparkles" size={18} />
                  <span className="font-semibold">{item}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Workshop Schedule" headingLevel="h2" className="mb-8" />
          <Card className="overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[var(--color-bg)]">
                  <tr className="text-[var(--color-text-secondary)]">
                    <th className="px-4 py-4 font-medium">Workshop</th>
                    <th className="px-4 py-4 font-medium">Date</th>
                    <th className="px-4 py-4 font-medium">Duration</th>
                    <th className="px-4 py-4 font-medium">Mode</th>
                    <th className="px-4 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {workshopSchedule.map((item) => (
                    <tr key={item.workshop} className="border-t border-[var(--color-border)]/60 text-[var(--color-text-body)]">
                      <td className="px-4 py-4 font-medium text-[var(--color-text-primary)]">{item.workshop}</td>
                      <td className="px-4 py-4">{item.date}</td>
                      <td className="px-4 py-4">{item.duration}</td>
                      <td className="px-4 py-4">{item.mode}</td>
                      <td className="px-4 py-4">
                        <span className="rounded-full bg-[var(--color-primary-light)] px-3 py-1 text-xs font-semibold uppercase tracking-[var(--tracking-wide)] text-[var(--color-primary)]">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Student Benefits" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {studentBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-6">
                <div className="flex items-center gap-3 text-[var(--color-text-primary)]">
                  <Icon name="check-circle-2" size={18} />
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Frequently Asked Questions" headingLevel="h2" className="mb-8" />
          <div className="space-y-3">
            {workshopFaqs.map((faq, index) => (
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
            <SectionHeading heading="Join Our Next Workshop" headingLevel="h2" className="mb-6" />
            <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
              Reserve your place in the next practical workshop and start building real engineering skills with guided support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button type="button" variant="primary">
                Register Now
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
