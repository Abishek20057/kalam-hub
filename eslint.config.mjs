import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  nextVitals,
  nextTypescript,

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "react/jsx-key": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  globalIgnores([
    ".next/**",
    "node_modules/**",
    "prisma/generated/**",
  ]),
]);