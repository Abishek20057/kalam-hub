import { z } from "zod";

const DifficultyLevel = z.enum(["Beginner", "Intermediate", "Advanced"]);
const ContentStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

export const ProjectSchema = z.object({
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

  difficulty: DifficultyLevel,
  status: ContentStatus.default("DRAFT"),
  featured: z.boolean().default(false),

  duration: z.string().min(1),
  estimatedCost: z.coerce.number().positive(),

  categoryId: z.string().cuid().optional(),
  thumbnailImageId: z.string().cuid().optional(),

  // Relations (arrays of IDs)
  tagIds: z.array(z.string().cuid()).optional(),
  technologyIds: z.array(z.string().cuid()).optional(),
  galleryImageIds: z.array(z.string().cuid()).optional(),

  // JSON fields
  hardwareComponents: z.any().optional(), // Define a stricter schema if needed
  softwareRequirements: z.any().optional(), // Define a stricter schema if needed
});

export type CreateProjectInput = z.infer<typeof ProjectSchema>;

export const UpdateProjectSchema = ProjectSchema.partial();
export type UpdateProjectInput = z.infer<typeof UpdateProjectSchema>;