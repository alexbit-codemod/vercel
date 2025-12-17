import js from "@eslint/js";
import emberRecommended from "eslint-plugin-ember/recommended";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import n from "eslint-plugin-n";
import qunit from "eslint-plugin-qunit";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

const cleanGlobals = (globalsObj) => {
  return Object.fromEntries(
    Object.entries(globalsObj).map(([key, value]) => [key.trim(), value])
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
    "/dist/",
    "/coverage/",
    "!.*",
    ".*/",
    "/.node_modules.ember-try/"
  ]),
  js.configs.recommended,
  emberRecommended.configs.base,
  emberRecommended.configs.gjs,
  emberRecommended.configs.gts,
  {
    languageOptions: {
      globals: {
        ...cleanGlobals(globals.browser)
      },
      parserOptions: {
        ecmaVersion: 'latest',
        requireConfigFile: false,
        babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    }
      },
      sourceType: 'module'
    },
  },
  {
    files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
    // TODO: Manually convert "plugin:n/recommended" - This plugin doesn't support flat config. You need to spread its rules and globals manually. Example: { plugins: { n: n }, rules: { ...n.configs.recommended.rules }, languageOptions: { globals: { ...(n.configs.recommended.globals || {}) } } } 
    plugins: {
      "n": n
    },
    languageOptions: {
      globals: {
        browser: false,
        ...cleanGlobals(globals.node)
      },
      parserOptions: {},
      sourceType: 'script'
    },
  },
  {
    files: ['tests/**/*-test.{js,ts}'],
    // TODO: Manually convert "plugin:qunit/recommended" - This plugin doesn't support flat config. You need to spread its rules and globals manually. Example: { plugins: { qunit: qunit }, rules: { ...qunit.configs.recommended.rules }, languageOptions: { globals: { ...(qunit.configs.recommended.globals || {}) } } } 
    plugins: {
      "qunit": qunit
    },
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
  },
  {
    plugins: {
      "prettier": prettierPlugin
    },
    rules: {
      "prettier/prettier": "error"
    },
  },
  eslintConfigPrettier
]);
