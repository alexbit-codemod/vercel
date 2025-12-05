import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    /* TODO: Import and use "@remix-run/eslint-config" - you need to find its flat config export. Example: import configName from "@remix-run/eslint-config"; then use ...configName or configName in the array */
    /* TODO: Migrate "plugin:hydrogen/recommended" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    /* TODO: Migrate "plugin:hydrogen/typescript" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'hydrogen/prefer-image-component': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      'no-case-declarations': 'off'
    },
  }
]);
