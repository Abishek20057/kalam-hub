import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * KalamHub — Container
 * Max-width wrapper with responsive padding per Architecture Doc 7.3:
 * max-width 1280px, padding 24px desktop / 20px tablet / 16px mobile.
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article";
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 md:px-5 xl:px-6",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
