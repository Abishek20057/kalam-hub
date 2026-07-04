"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";

export default function AdminLoginPage() {
  const prefersReducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const nextErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatusMessage("");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    await new Promise((resolve) => window.setTimeout(resolve, 900));

    setIsSubmitting(false);
    setStatusMessage("Authentication is ready for future integration with NextAuth/Auth.js.");
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_100%)] px-4 py-10 text-[var(--color-text-primary)] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative hidden overflow-hidden bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(124,58,237,0.22))] p-10 lg:flex lg:flex-col lg:justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%)]" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/90">
                  <Icon name="shield-check" size={16} />
                  Secure Admin Access
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-[var(--tracking-tight)] text-white">
                    KalamHub Admin
                  </h1>
                  <p className="max-w-md text-base leading-8 text-slate-200">
                    Manage your content, modules, and publishing workflow from a secure, polished workspace designed for future CMS expansion.
                  </p>
                </div>
              </div>
              <div className="relative rounded-[1.5rem] border border-white/15 bg-slate-950/30 p-6">
                <p className="text-sm uppercase tracking-[var(--tracking-wide)] text-slate-300">
                  Future-ready auth architecture
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  This screen is prepared for seamless integration with NextAuth/Auth.js once the backend and database layer are connected.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                  <Icon name="sparkles" size={16} />
                  Admin Access
                </div>
                <h2 className="text-3xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                  Welcome back
                </h2>
                <p className="mt-3 text-base leading-8 text-[var(--color-text-secondary)]">
                  Sign in to continue managing KalamHub content.
                </p>
              </div>

              <Card className="border-white/15 bg-slate-950/20 p-6 shadow-none backdrop-blur-xl">
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setErrors((current) => ({ ...current, email: undefined }));
                      }}
                      placeholder="admin@kalamhub.in"
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                        setErrors((current) => ({ ...current, password: undefined }));
                      }}
                      placeholder="Enter your password"
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]"
                    />
                    {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                        className="h-4 w-4 rounded border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      />
                      Remember me
                    </label>
                    <Link href="/admin/login" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                      Forgot password?
                    </Link>
                  </div>

                  {statusMessage && (
                    <div role="status" aria-live="polite" className="rounded-[var(--radius-md)] border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                      {statusMessage}
                    </div>
                  )}

                  <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Signing in..." : "Login"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
