import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ember from "eslint-plugin-ember";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import n from "eslint-plugin-n";
import qunit from "eslint-plugin-qunit";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: latest
      },
      sourceType: module,
      requireConfigFile: false,
      babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    }
    },
    extends: [ember.configs["flat/recommended"], prettier.configs["flat/recommended"], js.configs.recommended],
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
    languageOptions: {
      globals: {
        browser: false,
        ...globals.node
      },
      parserOptions: {},
      sourceType: script
    },
    extends: [n.configs["flat/recommended"]],
  },
  {
    files: ['tests/**/*-test.{js,ts}'],
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    extends: [qunit.configs["flat/recommended"]],
  }
]);
