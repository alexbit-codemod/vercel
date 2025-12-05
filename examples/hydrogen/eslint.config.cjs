import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    /* TODO: Migrate "plugin:hydrogen/recommended" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    /* TODO: Migrate "plugin:hydrogen/typescript" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    rules: {
      'node/no-missing-import': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off'
    },
  }
]);
