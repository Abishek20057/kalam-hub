"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { placeholderAnnouncement } from "@/data/placeholder";
import { cn } from "@/lib/utils";

/**
 * KalamHub — Announcement Bar
 * Architecture Doc Section 4.1
 *
 * Full-width strip at the very top of the page. Content is sourced from
 * placeholder data (Phase 1) — in Phase 5 the same shape comes from the
 * site_announcements table via a server-fetched prop instead.
 *
 * Dismissed state is keyed by the announcement's message so a new
 * announcement automatically reappears even if a previous one was
 * dismissed, without needing a DB-issued id yet.
 */
const STORAGE_KEY = "kalamhub-announcement-dismissed";

export function AnnouncementBar() {
  const announcement = placeholderAnnouncement;
  const prefersReducedMotion = useReducedMotion();
  const [isDismissed, setIsDismissed] = useState(true); // default hidden until checked, avoids flash
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if (!announcement.isDismissable) {
      setIsDismissed(false);
      return;
    }
    const dismissedMessage = window.localStorage.getItem(STORAGE_KEY);
    setIsDismissed(dismissedMessage === announcement.message);
  }, [announcement.isDismissable, announcement.message]);

  const handleDismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, announcement.message);
    setIsDismissed(true);
  };

  if (!announcement.isActive || !hasMounted || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        role="banner"
        aria-label="Announcement"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeOut" }}
        className={cn(
          "relative flex h-10 w-full items-center justify-center",
          "bg-[var(--color-primary)] px-4 text-white",
        )}
      >
        <p className="flex items-center gap-2 text-center text-sm font-medium">
          <span className="truncate">{announcement.message}</span>
          {announcement.linkText && announcement.linkHref && (
            <a
              href={announcement.linkHref}
              className={cn(
                "inline-flex shrink-0 items-center gap-1 underline-offset-2",
                "underline decoration-white/50 transition-colors hover:decoration-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)] rounded-sm",
              )}
            >
              {announcement.linkText}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </p>

        {announcement.isDismissable && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
            className={cn(
              "absolute right-3 inline-flex h-6 w-6 items-center justify-center rounded-full",
              "text-white/80 transition-colors hover:bg-white/10 hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
            )}
          >
            <X size={14} aria-hidden="true" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
