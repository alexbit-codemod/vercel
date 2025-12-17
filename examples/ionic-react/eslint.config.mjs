import globals from "globals";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

const cleanGlobals = (globalsObj) => {
  return Object.fromEntries(
    Object.entries(globalsObj).map(([key, value]) => [key.trim(), value])
  );
};

export default defineConfig([
  globalIgnores([
    "/node_modules",
    "/.pnp",
    ".pnp.js",
    "/coverage",
    "/dist",
    ".DS_Store",
    ".env.local",
    ".env.development.local",
    ".env.test.local",
    ".env.production.local",
    "/.nx",
    "/.nx/cache",
    "/.vscode/*",
    "!/.vscode/extensions.json",
    ".idea",
    "npm-debug.log*",
    "yarn-debug.log*",
    "yarn-error.log*",
    ".eslintcache",
    ".vercel"
  ]),
  {
    languageOptions: {
      globals: {
        ...cleanGlobals(globals.node)
      },
      parserOptions: {
        ecmaVersion: 2020
      }
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
  }
]);
