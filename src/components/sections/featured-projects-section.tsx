"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { placeholderFeaturedProjects } from "@/data/placeholder/featured-projects";

function getProjectIcon(category: string) {
  switch (category) {
    case "IoT":
      return "wifi";
    case "PCB Design":
      return "layers";
    case "Power Electronics":
      return "zap";
    case "Embedded Systems":
      return "cpu";
    default:
      return "circuit-board";
  }
}

export function FeaturedProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <SectionHeading
            heading="Featured Engineering Projects"
            subHeading="Explore practical projects designed for Electronics and Embedded Engineering students."
            headingLevel="h2"
            align="center"
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list">
            {placeholderFeaturedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.06 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
                role="listitem"
                className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.thumbnailAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <Badge variant="category">{project.category}</Badge>
                    </div>
                    <div className="absolute right-4 top-4">
                      <Badge variant="difficulty">{project.difficulty}</Badge>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                        <Icon name={getProjectIcon(project.category)} size={18} />
                      </span>
                      <span className="text-sm font-medium text-[var(--color-primary)]">Featured</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.slug}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-[var(--color-text-body)]"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>

                    <Button
                      type="button"
                      variant="secondary"
                      className="mt-2 w-full justify-center"
                      aria-label={`View project: ${project.title}`}
                    >
                      <Icon name="arrow-right" size={16} />
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
