"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { placeholderProjects } from "@/data/placeholder/projects";

// Augment placeholder data to match component's expectations
const placeholderProjectsPage = placeholderProjects.map(p => ({
  ...p, id: p.id, title: p.title, category: p.category, description: `A project in ${p.category}.`, thumbnailUrl: `/images/projects/thumb-${p.id}.svg`, thumbnailAlt: p.title, difficulty: "Beginner", accessType: p.status === 'published' ? 'Free' : 'Premium', tags: [{slug: p.category.toLowerCase(), label: p.category}]
}));

const categories = ["All", "Basic Electronics", "Embedded Systems", "PCB Design", "IoT", "Power Electronics"] as const;
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"] as const;
const accessTypes = ["All", "Free", "Premium"] as const;

type CategoryFilter = (typeof categories)[number];
type DifficultyFilter = (typeof difficulties)[number];
type AccessFilter = (typeof accessTypes)[number];

export default function ProjectsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>("All");
  const [selectedAccess, setSelectedAccess] = useState<AccessFilter>("All");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return placeholderProjectsPage.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty;
      const matchesAccess = selectedAccess === "All" || project.accessType === selectedAccess;
      const matchesSearch =
        query.length === 0 ||
        [project.title, project.description, project.category, ...project.tags.map((tag) => tag.label)]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesDifficulty && matchesAccess && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedAccess]);

  return (
    <main className="bg-[var(--color-bg)]">
      <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_35%)]" />
        <Container>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto max-w-6xl"
          >
            <SectionHeading
              heading="Engineering Project Library"
              subHeading="Browse hands-on engineering projects designed for practical learning and real-world innovation."
              align="center"
              className="mb-10"
            />

            <div className="mx-auto max-w-4xl rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl">
              <label htmlFor="project-search" className="sr-only">
                Search projects
              </label>
              <div className="relative rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 shadow-sm focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/10">
                <Icon name="search" size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                <input
                  id="project-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects, tools, or topics"
                  className="w-full border-none bg-transparent pl-11 pr-4 text-base text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]"
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-text-secondary)]" htmlFor="category-filter">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value as CategoryFilter)}
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-text-secondary)]" htmlFor="difficulty-filter">
                    Difficulty
                  </label>
                  <select
                    id="difficulty-filter"
                    value={selectedDifficulty}
                    onChange={(event) => setSelectedDifficulty(event.target.value as DifficultyFilter)}
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-text-secondary)]" htmlFor="access-filter">
                    Access
                  </label>
                  <select
                    id="access-filter"
                    value={selectedAccess}
                    onChange={(event) => setSelectedAccess(event.target.value as AccessFilter)}
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  >
                    {accessTypes.map((accessType) => (
                      <option key={accessType} value={accessType}>
                        {accessType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="pb-[var(--section-padding-mobile)] md:pb-[var(--section-padding-tablet)] xl:pb-[var(--section-padding-desktop)]">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                Project Categories
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Explore focused domains for electronics, embedded systems, and hardware engineering.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.filter((category) => category !== "All").map((category) => (
                <Badge key={category} variant="category">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.05 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
                role="listitem"
                className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-xl backdrop-blur-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.thumbnailAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge variant="category">{project.category}</Badge>
                  </div>
                  <div className="absolute right-4 top-4">
                    <Badge variant={project.accessType === "Free" ? "free" : "premium"}>{project.accessType}</Badge>
                  </div>
                </div>

                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-bg)] px-3 py-1">
                      <Icon name="timer" size={14} />
                      {project.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-bg)] px-3 py-1">
                      <Icon name="clock" size={14} />
                      3-5 Weeks
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag.slug} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-[var(--color-text-body)]">
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-[var(--color-primary)]">Components Included</span>
                    <Button type="button" variant="secondary" size="sm" aria-label={`View details for ${project.title}`}>
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
