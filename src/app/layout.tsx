import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/providers";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import "./globals.css";

/**
 * KalamHub — Root Layout
 *
 * Module 1 scope: fonts, providers, and base metadata only.
 * Module 2 — Section 1 adds AnnouncementBar here. Navbar / Footer are
 * still NOT added — those land in their own Module 2 sections.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI-Powered Innovation Ecosystem`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Providers>
          <AnnouncementBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
