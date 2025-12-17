import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import templateParser from "@angular-eslint/template-parser";
import typescriptParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

export default defineConfig([
  globalIgnores([
    "*~",
    "*.sw[mnpcod]",
    ".tmp",
    "*.tmp",
    "*.tmp.*",
    "UserInterfaceState.xcuserstate",
    "$RECYCLE.BIN/",
    "*.log",
    "log.txt",
    "/.sourcemaps",
    "/.versions",
    "/coverage",
    "/.ionic",
    "/www",
    "/platforms",
    "/plugins",
    "/dist",
    "/tmp",
    "/out-tsc",
    "/bazel-out",
    "/node_modules",
    "npm-debug.log",
    "yarn-error.log",
    ".idea/",
    ".project",
    ".classpath",
    ".c9/",
    "*.launch",
    ".settings/",
    "*.sublime-project",
    "*.sublime-workspace",
    ".vscode/*",
    "!.vscode/settings.json",
    "!.vscode/tasks.json",
    "!.vscode/launch.json",
    "!.vscode/extensions.json",
    ".history/*",
    "/.angular",
    "/.angular/cache",
    ".sass-cache/",
    "/.nx",
    "/.nx/cache",
    "/connect.lock",
    "/coverage",
    "/libpeerconnection.log",
    "testem.log",
    "/typings",
    ".DS_Store",
    "Thumbs.db",
    ".vercel"
  ]),
  {
    files: ["*.ts"],
    plugins: {
      "@angular-eslint": angular,
      "@angular-eslint/template": angularTemplate
    },
    languageOptions: {
      globals: {},
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true
      }
    },
    rules: {
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": ["Page", "Component"]
          }
        ],
      "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
      "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
    },
  },
  {
    files: ["*.html"],
    plugins: {
      "@angular-eslint": angular,
      "@angular-eslint/template": angularTemplate
    },
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "@angular-eslint": angular,
      "@angular-eslint/template": angularTemplate
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true
      }
    },
    rules: {
      ...angular.configs.recommended.rules
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplate
    },
    languageOptions: {
      parser: templateParser
    },
    rules: {
      ...angularTemplate.configs.recommended.rules
    },
  }
]);
