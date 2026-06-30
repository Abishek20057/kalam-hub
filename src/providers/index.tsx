"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

/**
 * KalamHub — Root Providers
 *
 * Single composition point for all client-side context providers.
 * Wrapped once in src/app/layout.tsx. As Phase 3 (Auth) and later
 * phases add providers (session, query client, etc.), they get added
 * here — layout.tsx itself never needs to change.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
