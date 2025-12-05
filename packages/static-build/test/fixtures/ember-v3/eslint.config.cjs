import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ember from "eslint-plugin-ember";
import globals from "globals";

export default defineConfig([
  {
    ...ember.configs["flat/recommended"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser
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
        'server/**/*.js',
      ],
    languageOptions: {
      globals: {
        browser: false,
        ...globals.node
      },
      parserOptions: {},
      sourceType: 'script'
    },
  }
]);
