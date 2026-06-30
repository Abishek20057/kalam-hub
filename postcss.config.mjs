/**
 * KalamHub — PostCSS Configuration
 * Tailwind CSS v4 uses a dedicated PostCSS plugin package instead of the
 * old `tailwindcss` + `autoprefixer` pair. Autoprefixer is built into
 * @tailwindcss/postcss, so it is not listed separately.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
