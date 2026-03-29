import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import emberRecommended from "eslint-plugin-ember/recommended";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import n from "eslint-plugin-n";
import qunit from "eslint-plugin-qunit";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

const cleanGlobals = (globalsObj) => {
  if (!globalsObj) return {};
  return Object.fromEntries(
    Object.entries(globalsObj).map(([key, value]) => [key.trim(), value]),
  );
};

export default defineConfig([
  globalIgnores([
    "/dist/",
    "/node_modules/",
    "/.env*",
    "/.pnp*",
    "/.eslintcache",
    "/coverage/",
    "/npm-debug.log*",
    "/testem.log",
    "/yarn-error.log",
    "/.node_modules.ember-try/",
    "/npm-shrinkwrap.json.ember-try",
    "/package.json.ember-try",
    "/package-lock.json.ember-try",
    "/yarn.lock.ember-try",
    "/DEBUG/",
    ".env",
    ".env.build",
    ".env.local",
    ".vercel",
    "/blueprints/*/files/",
    "!.*",
    ".*/",
  ]),
  js.configs.recommended,
  emberRecommended.configs.base,
  emberRecommended.configs.gjs,
  emberRecommended.configs.gts,
  {
    languageOptions: {
      globals: {
        ...cleanGlobals(globals.browser),
      },
      parserOptions: {
        ecmaVersion: "latest",
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            [
              "@babel/plugin-proposal-decorators",
              { decoratorsBeforeExport: true },
            ],
          ],
        },
      },
      sourceType: "module",
      parser: babelParser,
    },
  },
  {
    files: [
      "./.eslintrc.js",
      "./.prettierrc.js",
      "./.stylelintrc.js",
      "./.template-lintrc.js",
      "./ember-cli-build.js",
      "./testem.js",
      "./blueprints/*/index.js",
      "./config/**/*.js",
      "./lib/*/index.js",
      "./server/**/*.js",
    ],
    // TODO: Custom rule migrations for v9 are handled by a separate codemod: @eslint/v8-to-v9-custom-rules
    // TODO: For unsupported plugins or extends, check whether the plugin author has released ESLint v9 support and follow their migration guide once it's available.
    plugins: {
      n: n,
    },
    languageOptions: {
      globals: {
        browser: false,
        ...cleanGlobals(globals.node),
      },
      parserOptions: {},
      sourceType: "script",
      parser: babelParser,
    },
  },
  {
    files: ["tests/**/*-test.{js,ts}"],
    // TODO: Custom rule migrations for v9 are handled by a separate codemod: @eslint/v8-to-v9-custom-rules
    // TODO: For unsupported plugins or extends, check whether the plugin author has released ESLint v9 support and follow their migration guide once it's available.
    plugins: {
      qunit: qunit,
    },
    languageOptions: {
      globals: {},
      parserOptions: {},
      parser: babelParser,
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
]);
