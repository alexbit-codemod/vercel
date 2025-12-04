import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import globals from "globals";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 2020
      }
    },
    extends: [react.configs["flat/recommended"], 'eslint:recommended'],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
  }
]);
