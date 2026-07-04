import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailsContent } from "@/components/sections/project-details-content";
import {
  getAllProjectDetailSlugs,
  getProjectDetailBySlug,
  projectDetailPlaceholderData,
} from "@/data/placeholder/project-details";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectDetailSlugs();
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetailBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project detail page could not be found.",
    };
  }

  return {
    title: `${project.title} | KalamHub`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectDetailBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectDetailPlaceholderData
    .filter((candidate) => project.relatedProjectSlugs.includes(candidate.slug))
    .slice(0, 3);

  return <ProjectDetailsContent project={project} relatedProjects={relatedProjects} />;
}
