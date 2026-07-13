import { db } from "@/lib/db";
import type {
  CreateProjectInput,
  UpdateProjectInput,
} from "@/lib/validators/project";

export async function getProjects() {
  const projects = await db.project.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  return projects;
}

export async function getProjectById(id: string) {
  const project = await db.project.findUnique({
    where: { id },
  });
  return project;
}

export async function createProject(data: CreateProjectInput) {
  const project = await db.project.create({
    data: {
      ...data,
      hardwareComponents: data.hardwareComponents || {},
      softwareRequirements: data.softwareRequirements || {},
    },
  });
  return project;
}

export async function updateProject(id: string, data: UpdateProjectInput) {
  const project = await db.project.update({
    where: { id },
    data: {
      ...data,
      hardwareComponents: data.hardwareComponents
        ? data.hardwareComponents
        : undefined,
      softwareRequirements: data.softwareRequirements
        ? data.softwareRequirements
        : undefined,
    },
  });
  return project;
}

export async function deleteProject(id: string) {
  try {
    const project = await db.project.delete({
      where: { id },
    });
    return project;
  } catch (error) {
    // Handle Prisma error for record not found
    if (
      error instanceof Error &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return null;
    }
    throw error;
  }
}