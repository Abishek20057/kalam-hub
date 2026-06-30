import { PrismaClient } from "@prisma/client";

/**
 * KalamHub — Prisma Client Singleton
 *
 * Next.js hot-reloading in development creates a new module instance on
 * every file change, which would otherwise spawn a new PrismaClient (and
 * a new DB connection) each time. We cache the instance on `globalThis`
 * in development to prevent connection exhaustion.
 *
 * Not used anywhere yet in Module 1 — this file exists so that Phase 5
 * data-fetching code has zero setup friction when it arrives.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
