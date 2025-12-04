import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  }
]);
