import type { Metadata } from "next";
import ContactPageClient from "./contact-page";

export const metadata: Metadata = {
  title: "Contact | KalamHub",
  description: "Get in touch with KalamHub for workshops, internships, projects, collaboration, or general questions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
