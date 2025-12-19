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
    "bin",
    "*.d.ts",
    "dist",
  ]),
  {
    // TODO: Custom rule migrations for v9 are handled by a separate codemod: @eslint/v8-to-v9-custom-rules
    // TODO: For unsupported plugins or extends, check whether the plugin author has released ESLint v9 support and follow their migration guide once it's available.
    extends: [
      //"@remix-run/eslint-config",
      //"plugin:hydrogen/recommended",
      //"plugin:hydrogen/typescript"
    ],
    languageOptions: {
      globals: {},
      parserOptions: {},
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/naming-convention": "off",
      "hydrogen/prefer-image-component": "off",
      "no-useless-escape": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "no-case-declarations": "off",
    },
  },
]);
