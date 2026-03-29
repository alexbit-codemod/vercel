import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig([
  globalIgnores([
    "logs",
    "*.log",
    "npm-debug.log*",
    "yarn-debug.log*",
    "yarn-error.log*",
    "lerna-debug.log*",
    "report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json",
    "pids",
    "*.pid",
    "*.seed",
    "*.pid.lock",
    "lib-cov",
    "coverage",
    "*.lcov",
    ".nyc_output",
    "build/Release",
    "node_modules/",
    "jspm_packages/",
    "*.tsbuildinfo",
    ".npm",
    ".eslintcache",
    ".rpt2_cache/",
    ".rts2_cache_cjs/",
    ".rts2_cache_es/",
    ".rts2_cache_umd/",
    ".node_repl_history",
    "*.tgz",
    ".yarn-integrity",
    ".env",
    ".env.test",
    ".serverless/",
    ".vscode-test",
    ".yarn/cache",
    ".yarn/unplugged",
    ".yarn/build-state.yml",
    ".yarn/install-state.gz",
    ".pnp.*",
    "dist",
    ".vercel",
  ]),
  {
    // TODO: Custom rule migrations for v9 are handled by a separate codemod: @eslint/v8-to-v9-custom-rules
    // TODO: For unsupported plugins or extends, check whether the plugin author has released ESLint v9 support and follow their migration guide once it's available.
    extends: [
      //"plugin:hydrogen/recommended",
      //"plugin:hydrogen/typescript"
    ],
    languageOptions: {
      globals: {},
      parserOptions: {},
    },
    rules: {
      "node/no-missing-import": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/naming-convention": "off",
    },
  },
]);
