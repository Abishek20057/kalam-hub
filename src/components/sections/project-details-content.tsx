"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectDetailData } from "@/data/placeholder/project-details";

interface ProjectDetailsContentProps {
  project: ProjectDetailData;
  relatedProjects: ProjectDetailData[];
}

export function ProjectDetailsContent({ project, relatedProjects }: ProjectDetailsContentProps) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null);

  const breadcrumbItems = useMemo(() => ["Home", "Projects", project.title], [project.title]);

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
            className="relative grid gap-8 xl:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="space-y-6">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                {breadcrumbItems.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    {index > 0 && <Icon name="chevron-right" size={14} />}
                    {index < breadcrumbItems.length - 1 ? (
                      <Link href={index === 0 ? "/" : "/projects"} className="hover:text-[var(--color-primary)]">
                        {item}
                      </Link>
                    ) : (
                      <span className="font-medium text-[var(--color-text-primary)]">{item}</span>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="category">{project.category}</Badge>
                <Badge variant="difficulty">{project.difficulty}</Badge>
                <Badge variant={project.accessType === "Free" ? "free" : "premium"}>{project.accessType}</Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] sm:text-5xl">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text-secondary)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">
                  <Icon name="clock-3" size={16} />
                  {project.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">
                  <Icon name="sparkles" size={16} />
                  Placeholder learning project
                </span>
              </div>
            </div>

            <Card className="overflow-hidden p-0">
              <Image
                src={project.bannerImage}
                alt={project.bannerAlt}
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
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <SectionHeading heading="Project Overview" headingLevel="h2" className="mb-6" />
              <div className="space-y-6 text-sm leading-7 text-[var(--color-text-secondary)]">
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Problem Statement</h3>
                  <p>{project.problemStatement}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Solution</h3>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Applications</h3>
                  <ul className="space-y-2">
                    {project.applications.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Icon name="badge-check" size={16} className="text-[var(--color-primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Learning Outcomes</h3>
                  <ul className="space-y-2">
                    {project.learningOutcomes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Icon name="book-open" size={16} className="text-[var(--color-primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <SectionHeading heading="Components Required" headingLevel="h2" className="mb-6" />
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)] text-[var(--color-text-secondary)]">
                      <th className="pb-3 pr-3 font-medium">Component</th>
                      <th className="pb-3 pr-3 font-medium">Qty</th>
                      <th className="pb-3 pr-3 font-medium">Est. Cost</th>
                      <th className="pb-3 font-medium">Purchase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.components.map((component) => (
                      <tr key={component.name} className="border-b border-[var(--color-border)]/60 text-[var(--color-text-body)]">
                        <td className="py-3 pr-3">{component.name}</td>
                        <td className="py-3 pr-3">{component.quantity}</td>
                        <td className="py-3 pr-3">{component.estimatedCost}</td>
                        <td className="py-3">
                          <a href={component.purchaseLink} className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                            Buy
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="grid gap-6 xl:grid-cols-2">
            <Card className="p-6">
              <SectionHeading heading="Circuit Diagram" headingLevel="h2" className="mb-6" />
              <button
                type="button"
                onClick={() => setSelectedDiagram(project.circuitDiagramImage)}
                className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]"
                aria-label="Open circuit diagram in zoom view"
              >
                <Image
                  src={project.circuitDiagramImage}
                  alt={project.circuitDiagramAlt}
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            </Card>

            <Card className="p-6">
              <SectionHeading heading="Block Diagram" headingLevel="h2" className="mb-6" />
              <Image
                src={project.blockDiagramImage}
                alt={project.blockDiagramAlt}
                width={900}
                height={600}
                className="h-auto w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] object-cover"
              />
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <Card className="p-6">
            <SectionHeading heading="Project Workflow" headingLevel="h2" className="mb-8" />
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
              {project.workflow.map((step, index) => (
                <div key={step} className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-light)] text-sm font-semibold text-[var(--color-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{step}</span>
                  {index < project.workflow.length - 1 && (
                    <Icon name="chevron-down" size={18} className="text-[var(--color-text-secondary)] md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="p-6">
              <SectionHeading heading="Software Used" headingLevel="h2" className="mb-6" />
              <div className="grid gap-3">
                {project.softwareUsed.map((tool) => (
                  <div key={tool.name} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                    <div className="flex items-center gap-2 text-[var(--color-text-primary)]">
                      <Icon name="code-2" size={16} />
                      <span className="font-semibold">{tool.name}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{tool.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <SectionHeading heading="Downloads" headingLevel="h2" className="mb-6" />
              <div className="grid gap-3 sm:grid-cols-2">
                {project.downloads.map((item) => (
                  <Button key={item.label} type="button" variant="outline" className="justify-between">
                    <span>{item.label}</span>
                    <Icon name="download" size={16} />
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Related Projects" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <motion.article
                key={relatedProject.slug}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-[var(--shadow-sm)]"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="category">{relatedProject.category}</Badge>
                    <Badge variant="difficulty">{relatedProject.difficulty}</Badge>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">{relatedProject.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{relatedProject.shortDescription}</p>
                  <Link href={`/projects/${relatedProject.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                    View project
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-[var(--section-padding-mobile)] md:pb-[var(--section-padding-tablet)] xl:pb-[var(--section-padding-desktop)]">
        <Container>
          <Card className="p-8 text-center">
            <SectionHeading heading="Ready to Start This Project?" headingLevel="h2" className="mb-6" />
            <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
              Use this placeholder roadmap as a launchpad for your next hands-on build and explore more engineering ideas in the library.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={`/projects/${project.slug}`}>
                <Button type="button" variant="primary">
                  Start This Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button type="button" variant="secondary">
                  Browse More Projects
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      {selectedDiagram && (
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="relative max-w-5xl rounded-[var(--radius-xl)] bg-[var(--color-surface)] p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedDiagram(null)}
              className="absolute right-3 top-3 rounded-full bg-[var(--color-bg)] p-2 text-[var(--color-text-primary)]"
              aria-label="Close zoomed diagram"
            >
              <Icon name="x" size={18} />
            </button>
            <Image src={selectedDiagram} alt="Zoomed project diagram" width={1400} height={1000} className="max-h-[80vh] w-auto rounded-[var(--radius-lg)] object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}
