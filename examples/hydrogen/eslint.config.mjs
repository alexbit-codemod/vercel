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
    ".vercel"
  ]),
  {
    // TODO: The following extends need manual migration - check their flat config support
    // NOTE: 'extends' is not supported in flat config - these should be spread directly in the array
    extends: [
      "plugin:hydrogen/recommended",
      "plugin:hydrogen/typescript"
    ],
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    rules: {
      'node/no-missing-import': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off'
    },
  }
]);
