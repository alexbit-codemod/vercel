import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["*.ts"],
    /* TODO: Migrate "plugin:@angular-eslint/recommended" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    /* TODO: Migrate "plugin:@angular-eslint/template/process-inline-templates" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    languageOptions: {
      globals: {},
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true
      }
    },
    rules: {
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": ["Page", "Component"]
          }
        ],
      "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
      "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
    },
  },
  {
    files: ["*.html"],
    /* TODO: Migrate "plugin:@angular-eslint/template/recommended" manually - this plugin may not support flat config yet. You need to find the flat config equivalent or migrate manually. */
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
  }
]);
