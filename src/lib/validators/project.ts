import { z } from "zod";

const projectSchemaBase = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").max(100),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can only contain lowercase letters, numbers, and hyphens",
    ),
  shortDescription: z.string().min(10).max(300),
  fullDescription: z.string().min(50),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  estimatedCost: z.coerce.number().positive(),
  duration: z.string().min(1),
  featured: z.boolean().default(false),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  authorId: z.string().cuid().optional(),
  categoryId: z.string().cuid().optional(),
  thumbnailImageId: z.string().cuid().optional(),
  hardwareComponents: z.any().optional(),
  softwareRequirements: z.any().optional(),
});

export const CreateProjectSchema = projectSchemaBase;
export type CreateProjectInput = z.infer<typeof CreateProjectSchema>;

export const UpdateProjectSchema = projectSchemaBase.partial();
export type UpdateProjectInput = z.infer<typeof UpdateProjectSchema>;