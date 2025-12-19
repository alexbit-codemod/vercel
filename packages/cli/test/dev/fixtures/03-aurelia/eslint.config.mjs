import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig([
  globalIgnores([
    ".DS_STORE",
    "Thumbs.db",
    ".idea",
    ".vscode/*",
    "!.vscode/settings.json",
    "!.vscode/tasks.json",
    "!.vscode/launch.json",
    "!.vscode/extensions.json",
    "node_modules",
    "/scripts",
    "/src/environment.ts",
    "/public",
    "/test/coverage-jest",
    "/test/coverage-karma",
    "!yarn.lock",
    ".now",
    ".vercel",
  ]),
]);
