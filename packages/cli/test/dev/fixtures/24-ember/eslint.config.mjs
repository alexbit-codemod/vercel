import js from "@eslint/js";
import emberRecommended from "eslint-plugin-ember/recommended";
import globals from "globals";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";

const cleanGlobals = (globalsObj) => {
  return Object.fromEntries(
    Object.entries(globalsObj).map(([key, value]) => [key.trim(), value])
  );
};

export default defineConfig([
  globalIgnores([
    "/dist/",
    "/tmp/",
    "/bower_components/",
    "/node_modules/",
    "/.env*",
    "/.pnp*",
    "/.sass-cache",
    "/connect.lock",
    "/coverage/",
    "/libpeerconnection.log",
    "/npm-debug.log*",
    "/testem.log",
    "/yarn-error.log",
    "/.node_modules.ember-try/",
    "/bower.json.ember-try",
    "/package.json.ember-try",
    ".now",
    ".vercel",
    "/blueprints/*/files/",
    "/vendor/",
    "/dist/",
    "/tmp/",
    "/bower_components/",
    "/node_modules/",
    "/coverage/",
    "!.*",
    "/.node_modules.ember-try/",
    "/bower.json.ember-try",
    "/package.json.ember-try"
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
        ecmaVersion: 2018
      },
      sourceType: 'module'
    },
  },
  {
    files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
    languageOptions: {
      globals: {
        browser: false,
        ...cleanGlobals(globals.node)
      },
      parserOptions: {},
      sourceType: 'script'
    },
  }
]);
