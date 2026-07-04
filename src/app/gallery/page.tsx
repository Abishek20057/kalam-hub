"use client";

import { useEffect, useMemo, useState } from "react";
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
  featuredGalleryItems,
  galleryCategories,
  galleryItems,
  galleryStats,
  internshipHighlights,
  studentProjects,
  workshopMemories,
} from "@/data/placeholder/gallery";

export default function GalleryPage() {
  const prefersReducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[number] | null>(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  const filteredGalleryItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return galleryItems.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        query.length === 0 ||
        [item.title, item.description, item.category]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        const currentIndex = filteredGalleryItems.findIndex((item) => item.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredGalleryItems.length;
        setSelectedImage(filteredGalleryItems[nextIndex] ?? null);
      }

      if (event.key === "ArrowLeft") {
        const currentIndex = filteredGalleryItems.findIndex((item) => item.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
        setSelectedImage(filteredGalleryItems[prevIndex] ?? null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredGalleryItems, selectedImage]);

  useEffect(() => {
    if (featuredGalleryItems.length <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveFeaturedIndex((current) => (current + 1) % featuredGalleryItems.length);
    }, 5000);

    return () => window.clearInterval(timerId);
  }, []);

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
              <Badge variant="category">Gallery</Badge>
              <SectionHeading
                heading="KalamHub Gallery"
                subHeading="Explore our workshops, electronics projects, PCB designs, internships, and innovation moments."
                align="left"
              />
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <label htmlFor="gallery-search" className="sr-only">
                  Search gallery items
                </label>
                <div className="relative flex-1">
                  <Icon name="search" size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                  <input
                    id="gallery-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search gallery"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {galleryCategories.filter((category) => category !== "All").map((category) => (
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
                src="/images/gallery/hero-gallery.svg"
                alt="Gallery hero illustration"
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
          <SectionHeading heading="Gallery Categories" headingLevel="h2" className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
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
          <SectionHeading heading="Featured Gallery" headingLevel="h2" className="mb-8" />
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-4 shadow-[var(--shadow-sm)]">
            {featuredGalleryItems[activeFeaturedIndex] ? (
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden rounded-[var(--radius-xl)]">
                  <Image
                    src={featuredGalleryItems[activeFeaturedIndex].image}
                    alt={featuredGalleryItems[activeFeaturedIndex].imageAlt}
                    width={1200}
                    height={800}
                    className="h-80 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-2">
                  <Badge variant="category">{featuredGalleryItems[activeFeaturedIndex].category}</Badge>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">{featuredGalleryItems[activeFeaturedIndex].title}</h3>
                  <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{featuredGalleryItems[activeFeaturedIndex].description}</p>
                  <div className="flex gap-2">
                    {featuredGalleryItems.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveFeaturedIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${activeFeaturedIndex === index ? "w-8 bg-[var(--color-primary)]" : "w-2.5 bg-[var(--color-border)]"}`}
                        aria-label={`Show featured item ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Gallery Grid" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGalleryItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02, y: -4 }}
                className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 text-left shadow-[var(--shadow-sm)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-3 text-[var(--color-primary)]">
                      <Icon name="zoom-in" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="category" className="mb-3">{item.category}</Badge>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.date}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Workshop Memories" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 md:grid-cols-3">
            {workshopMemories.map((memory) => (
              <Card key={memory.title} className="overflow-hidden p-0">
                <Image src={memory.image} alt={memory.title} width={800} height={500} className="h-56 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{memory.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{memory.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Internship Highlights" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex h-20 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] text-sm font-semibold text-[var(--color-text-secondary)]">
                    Company Logo
                  </div>
                ))}
              </div>
            </Card>
            <div className="grid gap-4 md:grid-cols-3">
              {internshipHighlights.map((highlight) => (
                <Card key={highlight.title} className="overflow-hidden p-0">
                  <Image src={highlight.image} alt={highlight.title} width={800} height={500} className="h-40 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{highlight.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Student Projects Showcase" headingLevel="h2" className="mb-8" />
          <div className="grid gap-6 md:grid-cols-3">
            {studentProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden p-0">
                <Image src={project.image} alt={project.title} width={800} height={500} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <Badge variant="category" className="mb-3">{project.category}</Badge>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{project.studentName}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Statistics" headingLevel="h2" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {galleryStats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <p className="text-3xl font-semibold text-[var(--color-primary)]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-[var(--section-padding-mobile)] md:pb-[var(--section-padding-tablet)] xl:pb-[var(--section-padding-desktop)]">
        <Container>
          <Card className="p-8 text-center">
            <SectionHeading heading="Become Part of the KalamHub Community" headingLevel="h2" className="mb-6" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/workshops">
                <Button type="button" variant="primary">
                  Join Workshop
                </Button>
              </Link>
              <Link href="/projects">
                <Button type="button" variant="secondary">
                  Submit Your Project
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/75 p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl rounded-[var(--radius-xl)] bg-[var(--color-surface)] p-3 shadow-2xl">
            <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-3 top-3 rounded-full bg-[var(--color-bg)] p-2 text-[var(--color-text-primary)]" aria-label="Close gallery image">
              <Icon name="x" size={18} />
            </button>
            <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
              <Image src={selectedImage.image} alt={selectedImage.imageAlt} width={1400} height={1000} className="max-h-[80vh] w-full object-contain" loading="lazy" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 px-2">
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{selectedImage.title}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{selectedImage.category}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => {
                  const currentIndex = filteredGalleryItems.findIndex((item) => item.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
                  setSelectedImage(filteredGalleryItems[prevIndex] ?? null);
                }} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] p-2" aria-label="Show previous image">
                  <Icon name="arrow-left" size={16} />
                </button>
                <button type="button" onClick={() => {
                  const currentIndex = filteredGalleryItems.findIndex((item) => item.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % filteredGalleryItems.length;
                  setSelectedImage(filteredGalleryItems[nextIndex] ?? null);
                }} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] p-2" aria-label="Show next image">
                  <Icon name="arrow-right" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
