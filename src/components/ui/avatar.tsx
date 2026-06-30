"use client";

import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

/**
 * KalamHub — Avatar
 * Image with initials fallback per Architecture Doc 4.12 (Team cards):
 * "Avatar component with initials fallback built in."
 */
export interface AvatarProps {
  src?: string;
  alt: string;
  name: string;
  size?: number;
  className?: string;
}

export function Avatar({ src, alt, name, size = 80, className }: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = src && !imageError;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[var(--radius-full)] border-[3px] border-[var(--color-primary)] bg-[var(--color-primary-light)]",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span
          className="font-semibold text-[var(--color-primary)]"
          style={{ fontSize: size * 0.35 }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
