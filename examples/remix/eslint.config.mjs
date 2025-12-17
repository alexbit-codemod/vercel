import remixConfig from "@remix-run/eslint-config";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig([
  globalIgnores([
    "node_modules",
    "/build",
    ".env",
    ".vercel"
  ]),
  {
    // TODO: The following extends need manual migration - check their flat config support
    // NOTE: 'extends' is not supported in flat config - these should be spread directly in the array
    extends: [
      "@remix-run/eslint-config",
      "@remix-run/eslint-config/node"
    ],
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
  }
]);
