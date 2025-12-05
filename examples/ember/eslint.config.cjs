import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ember from "eslint-plugin-ember";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import n from "eslint-plugin-n";
import qunit from "eslint-plugin-qunit";

export default defineConfig([
  {
    ...ember.configs["flat/recommended"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: 'latest'
      },
      sourceType: 'module',
      requireConfigFile: false,
      babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    }
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
    ...n.configs["flat/recommended"],
    languageOptions: {
      globals: {
        browser: false,
        ...globals.node
      },
      parserOptions: {},
      sourceType: 'script'
    },
  },
  {
    files: ['tests/**/*-test.{js,ts}'],
    ...qunit.configs["flat/recommended"],
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
  },
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error"
    },
  },
  eslintConfigPrettier,
]);
