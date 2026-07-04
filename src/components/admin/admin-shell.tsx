"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

const navigationGroups = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/admin", icon: "layout-dashboard" },
      { label: "Website", href: "/admin/website", icon: "home" },
      { label: "Projects", href: "/admin/projects", icon: "folder-kanban" },
      { label: "Workshops", href: "/admin/workshops", icon: "calendar-days" },
      { label: "Gallery", href: "/admin/gallery", icon: "images" },
      { label: "Internships", href: "/admin/internships", icon: "briefcase" },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Media Library", href: "/admin/media", icon: "image" },
      { label: "SEO", href: "/admin/seo", icon: "search" },
      { label: "Settings", href: "/admin/settings", icon: "settings" },
      { label: "Users", href: "/admin/users", icon: "users" },
      { label: "Logout", href: "/admin/login", icon: "log-out" },
    ],
  },
];

interface AdminShellProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
  children: React.ReactNode;
}

export function AdminShell({ title, subtitle, breadcrumb, children }: AdminShellProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentBreadcrumb = useMemo(() => {
    if (breadcrumb?.length) {
      return breadcrumb;
    }

    return [{ label: title }];
  }, [breadcrumb, title]);

  return (
    <div className={isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[var(--color-bg)] text-[var(--color-text-primary)]"}>
      <div className="min-h-screen">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-white/10 bg-slate-950/95 px-4 py-5 text-slate-100 shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          >
            <div className="flex items-center justify-between px-2">
              <div>
                <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-slate-400">KalamHub</p>
                <h2 className="text-lg font-semibold">Admin Console</h2>
              </div>
              <Button type="button" variant="ghost" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                <Icon name="x" size={18} />
              </Button>
            </div>

            <div className="mt-8 space-y-8">
              {navigationGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[var(--tracking-wide)] text-slate-500">
                    {group.title}
                  </p>
                  <nav className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium transition ${
                            isActive
                              ? "bg-[var(--color-primary)] text-white"
                              : "text-slate-300 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <Icon name={item.icon} size={16} />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              ))}
            </div>
          </aside>

          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Close sidebar"
              className="fixed inset-0 z-30 bg-slate-950/60 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <div className="flex-1">
            <header className="sticky top-0 z-20 border-b border-white/10 bg-white/70 px-4 py-4 backdrop-blur-xl dark:bg-slate-950/70 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Button type="button" variant="outline" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                    <Icon name="panel-left" size={16} />
                  </Button>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      {currentBreadcrumb.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-2">
                          {index > 0 && <Icon name="chevron-right" size={14} />}
                          {item.href ? (
                            <Link href={item.href} className="hover:text-[var(--color-primary)]">
                              {item.label}
                            </Link>
                          ) : (
                            <span className="font-medium text-[var(--color-text-primary)]">{item.label}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <h1 className="text-xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">{title}</h1>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <label className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-2 text-sm text-[var(--color-text-secondary)]">
                    <Icon name="search" size={16} />
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-24 bg-transparent outline-none sm:w-32"
                      aria-label="Search"
                    />
                  </label>
                  <Button type="button" variant="outline" aria-label="Notifications">
                    <Icon name="bell" size={16} />
                  </Button>
                  <Button type="button" variant="outline" aria-label="Toggle theme" onClick={() => setIsDarkMode((value) => !value)}>
                    <Icon name={isDarkMode ? "sun" : "moon"} size={16} />
                  </Button>
                  <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-sm font-semibold text-[var(--color-primary)]">
                      A
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">Admin</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">Super Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main className="px-4 py-6 sm:px-6 lg:px-8">
              {subtitle && (
                <div className="mb-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 text-sm leading-7 text-[var(--color-text-secondary)] backdrop-blur-xl">
                  {subtitle}
                </div>
              )}
              <Container as="div" className="px-0">
                {children}
              </Container>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
