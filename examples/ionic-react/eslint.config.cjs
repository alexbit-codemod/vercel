import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import globals from "globals";

export default defineConfig([
  {
    ...react.configs["flat/recommended"],
    /* TODO: Import and use "eslint:recommended" - you need to find its flat config export. Example: import configName from "eslint:recommended"; then use ...configName or configName in the array */
    languageOptions: {
      globals: {
        ...globals.node
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
