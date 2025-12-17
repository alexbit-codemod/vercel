import remixConfig from "@remix-run/eslint-config";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig([
  globalIgnores([
    "node_modules",
    "/.cache",
    "/build",
    "/dist",
    "/public/build",
    "/.mf",
    ".env",
    ".shopify",
    ".vercel",
    "build",
    "node_modules",
    "bin",
    "*.d.ts",
    "dist"
  ]),
  {
    // TODO: The following extends need manual migration - check their flat config support
    // NOTE: 'extends' is not supported in flat config - these should be spread directly in the array
    extends: [
      "@remix-run/eslint-config",
      "plugin:hydrogen/recommended",
      "plugin:hydrogen/typescript"
    ],
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'hydrogen/prefer-image-component': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      'no-case-declarations': 'off'
    },
  }
]);
