import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/" },
  { label: "Resources", href: "/projects" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/70 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
              KalamHub
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)]">
              A hands-on innovation space for electronics, embedded systems, and practical engineering learning.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-body)] transition-colors hover:text-[var(--color-primary)]"
              >
                <Icon name="arrow-right" size={14} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
