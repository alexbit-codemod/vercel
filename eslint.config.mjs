import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const allSourceFiles = ['**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}'];
const cliFiles = ['packages/cli/**/*.{js,ts,tsx,mjs,cjs,mts,cts}'];
const clientFiles = ['packages/client/**/*.{js,ts,tsx,mjs,cjs,mts,cts}'];

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/.nuxt/**',
      '**/.turbo/**',
      '**/.vercel/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml',
      'examples/**',
      'packages/node/src/bridge.ts',
      'packages/*/test/fixtures/**',
      'packages/cli/@types/**',
      'packages/cli/download/**',
      'packages/cli/dist/**',
      'packages/cli/test/fixtures/**',
      'packages/cli/test/dev/fixtures/**',
      'packages/cli/bin/**',
      'packages/cli/link/**',
      'packages/cli/src/util/dev/templates/*.ts',
      'packages/client/tests/fixtures/**',
      'packages/client/lib/**',
      'packages/hydrogen/edge-entry.js',
      'packages/next/test/integration/middleware/**',
      'packages/next/test/integration/middleware-eval/**',
      'packages/middleware/src/entries.js',
      'packages/static-build/test/fixtures/**',
      'packages/static-build/test/build-fixtures/**',
      'packages/static-build/test/cache-fixtures/**',
      'packages/redwood/test/fixtures/**',
      'packages/remix/test/fixtures-*/**',
      'packages/gatsby-plugin-vercel-analytics/**',
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: allSourceFiles,
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      jest: jestPlugin,
    },
    rules: {
      'no-restricted-syntax': [
        'warn',
        'WithStatement',
        {
          message: 'substr() is deprecated, use slice() or substring() instead',
          selector: "MemberExpression > Identifier[name='substr']",
        },
      ],
      'no-dupe-keys': 'error',
      'no-constant-binary-expression': 'off',
      'no-unused-expressions': 'off',
      'valid-typeof': 'off',
      'require-atomic-updates': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
    },
  },
  {
    files: ['packages/remix/defaults/**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
    },
  },
  {
    files: cliFiles,
    rules: {
      'lines-between-class-members': 'off',
      'no-async-promise-executor': 'off',
      'no-control-regex': 'off',
      'no-empty': 'off',
      'prefer-destructuring': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'no-console': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'prefer-const': 'error',
    },
  },
  {
    files: clientFiles,
    rules: {
      'prefer-const': 'off',
      'require-atomic-updates': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
);
