import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig([
  globalIgnores(["node_modules", "/build", ".env", ".vercel"]),
  {
    // TODO: Custom rule migrations for v9 are handled by a separate codemod: @eslint/v8-to-v9-custom-rules
    // TODO: For unsupported plugins or extends, check whether the plugin author has released ESLint v9 support and follow their migration guide once it's available.
    extends: [
      //"@remix-run/eslint-config",
      //"@remix-run/eslint-config/node"
    ],
    languageOptions: {
      globals: {},
      parserOptions: {},
    },
  },
]);
