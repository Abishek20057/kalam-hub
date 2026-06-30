/**
 * KalamHub — Home Page
 *
 * MODULE 1 PLACEHOLDER. Per explicit instruction, no Home Page sections
 * (Navbar, Hero, Footer, etc.) are built in this module. This file exists
 * only so the application has a valid route and Module 1's foundation
 * (design tokens, providers, fonts) can be visually verified to be wired
 * up correctly. Module 2 replaces this entire file's contents with the
 * real section composition per the Architecture Doc's component hierarchy.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          KalamHub
        </h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Module 1 foundation — Home Page UI begins in Module 2.
        </p>
      </div>
    </main>
  );
}
