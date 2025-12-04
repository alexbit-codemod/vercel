import { defineConfig } from "eslint/config";
import hydrogen from "eslint-plugin-hydrogen";

export default defineConfig([
  {
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    extends: ["@remix-run/eslint-config", hydrogen.configs["flat/recommended"], hydrogen.configs["flat/typescript"]],
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
