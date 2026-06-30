"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useIntersection } from "@/hooks";

/**
 * KalamHub — CountUpNumber
 *
 * Backs the Statistics section (Architecture Doc 4.7 / 7-15 Final Review:
 * "Show final value instantly if JS takes > 2s"). Only mounts its
 * animation logic when in viewport (Intersection Observer), and shows
 * the final number instantly if prefers-reduced-motion is set.
 */
export interface CountUpNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1.5,
  className,
}: CountUpNumberProps) {
  const { ref, isIntersecting } = useIntersection<HTMLSpanElement>({
    threshold: 0.5,
  });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isIntersecting) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutQuad
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isIntersecting, value, duration, prefersReducedMotion]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
