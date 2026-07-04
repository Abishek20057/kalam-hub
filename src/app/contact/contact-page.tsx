"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactInfo, faqs, quickContactCards, socialLinks } from "@/data/placeholder/contact";

const categories = [
  "General Inquiry",
  "Workshop",
  "Internship",
  "Project Support",
  "Collaboration",
] as const;

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  category: categories[0],
  message: "",
};

export default function ContactPageClient() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initialFormState, string>>>({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof typeof initialFormState, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please share a short message so we can help you better.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitMessage("");
      return;
    }

    setSubmitMessage("Thank you! Your message has been received. We will reach out soon.");
    setFormData(initialFormState);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmitMessage("");
  };

  return (
    <main className="bg-[var(--color-bg)]">
      <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_35%)]" />
        <Container>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative grid gap-8 xl:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-6">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <Link href="/" className="hover:text-[var(--color-primary)]">
                  Home
                </Link>
                <Icon name="chevron-right" size={14} />
                <span className="font-medium text-[var(--color-text-primary)]">Contact</span>
              </nav>
              <Badge variant="category">Contact</Badge>
              <SectionHeading
                heading="Contact KalamHub"
                subHeading="Have a question, project idea, workshop inquiry, or collaboration proposal? We would love to hear from you."
                align="left"
              />
              <div className="flex flex-wrap gap-3">
                <Button type="button" variant="primary" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
                  Start a Conversation
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden p-0">
              <Image src="/images/contact/hero-contact.svg" alt="Illustration for contacting KalamHub" width={900} height={600} className="h-full w-full object-cover" loading="eager" />
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <motion.article
                key={item.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-[var(--shadow-sm)] backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <Icon name={item.icon} size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--color-text-secondary)]">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="p-6 md:p-8">
              <SectionHeading heading="Send Us a Message" headingLevel="h2" className="mb-6" />
              <form id="contact-form" className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                      placeholder="What would you like to discuss?"
                    />
                    {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
                    placeholder="Tell us about your project idea, workshop request, or support needs."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                </div>

                {submitMessage && (
                  <div role="status" aria-live="polite" className="rounded-[var(--radius-md)] border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                    {submitMessage}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                  <Button type="reset" variant="secondary" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </form>
            </Card>

            <div className="space-y-6">
              <SectionHeading heading="Quick Contact" headingLevel="h2" />
              <div className="grid gap-4">
                {quickContactCards.map((card) => (
                  <Card key={card.title} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                        <Icon name={card.icon} size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">{card.description}</p>
                        <Link href={card.href} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                          {card.buttonLabel}
                          <Icon name="chevron-right" size={14} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6">
                <SectionHeading heading="Social Media" headingLevel="h2" className="mb-5" />
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-text-primary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                      <Icon name={link.icon} size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <Card className="overflow-hidden border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(124,58,237,0.12))] p-6 md:p-8">
            <SectionHeading heading="Visit Our Learning Space" headingLevel="h2" className="mb-6" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  We are building a future-ready space for electronics learning, maker projects, and practical innovation experiences.
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">A map preview will be shared soon for the physical learning space and community hub.</p>
              </div>
              <div className="rounded-[var(--radius-xl)] border border-white/20 bg-[rgba(255,255,255,0.16)] p-8 text-center backdrop-blur-xl">
                <Image src="/images/contact/map-placeholder.svg" alt="Placeholder map illustration" width={800} height={500} className="mx-auto h-56 w-full max-w-xl rounded-[var(--radius-lg)] object-cover" />
                <p className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">Map Coming Soon</p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <SectionHeading heading="Frequently Asked Questions" headingLevel="h2" className="mb-8" />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-text-primary)]">
                  <span className="mr-2 text-[var(--color-primary)]">{index + 1}.</span>
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-[var(--section-padding-mobile)] md:pb-[var(--section-padding-tablet)] xl:pb-[var(--section-padding-desktop)]">
        <Container>
          <Card className="p-8 text-center">
            <SectionHeading heading="Let's Build the Future of Electronics Together" headingLevel="h2" className="mb-6" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/projects">
                <Button type="button" variant="primary">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/workshops">
                <Button type="button" variant="secondary">
                  Join Workshop
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
