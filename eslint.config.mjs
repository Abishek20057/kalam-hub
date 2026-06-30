import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * KalamHub — ESLint Configuration
 *
 * Extends Next.js's recommended core-web-vitals + TypeScript rule sets.
 * Custom rules below enforce architecture rules from the Home Page
 * Architecture document (Section 13 — Development Checklist):
 *  - no hardcoded strings that belong in placeholder/DB content (warn only,
 *    cannot be fully automated, kept as a reminder via comment)
 *  - no `any` types
 *  - no unused imports/vars
 */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "react/jsx-key": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "prisma/generated/**"],
  },
];

export default eslintConfig;
