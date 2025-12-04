import { defineConfig } from "eslint/config";
import hydrogen from "eslint-plugin-hydrogen";

export default defineConfig([
  {
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    extends: [hydrogen.configs["flat/recommended"], hydrogen.configs["flat/typescript"]],
    rules: {
      'node/no-missing-import': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off'
    },
  }
]);
