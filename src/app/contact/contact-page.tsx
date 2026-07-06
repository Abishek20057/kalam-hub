"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPageClient() {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    // Placeholder for submission logic
    setTimeout(() => {
      setStatus("Your message has been sent successfully!");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <main className="bg-[var(--color-bg)] py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            heading="Contact Us"
            subHeading="We're here to help. Reach out with questions about workshops, internships, projects, or anything else."
            align="center"
            className="mb-10"
          />
          <Card className="mx-auto max-w-3xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                    Full Name
                  </label>
                  <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} required className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                    Email Address
                  </label>
                  <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} required className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                  Subject
                </label>
                <input type="text" name="subject" id="subject" value={formState.subject} onChange={handleChange} required className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                  Message
                </label>
                <textarea name="message" id="message" rows={5} value={formState.message} onChange={handleChange} required className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm" />
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Send Message
                </Button>
                {status && <p className="text-sm text-[var(--color-text-secondary)]">{status}</p>}
              </div>
            </form>
          </Card>
        </motion.div>
      </Container>
    </main>
  );
}