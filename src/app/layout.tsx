import type { Metadata } from "next";
import { Providers } from "@/providers";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants";
import { LayoutSwitcher } from "@/components/layout/layout-switcher";
import "./globals.css";

/**
 * KalamHub — Root Layout
 *
 * Module 1 scope: fonts, providers, and base metadata only.
 * Module 2 — Section 1 added AnnouncementBar, Section 2 added Navbar.
 * Footer is still NOT added — that lands in its own Module 2 section.
 */
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
      <body>
        <Providers>
          <LayoutSwitcher>
            {children}
          </LayoutSwitcher>
        </Providers>
      </body>
    </html>
  );
}
