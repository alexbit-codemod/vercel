import { defineConfig } from "eslint/config";
import @angularEslint from "eslint-plugin-@angular-eslint";

export default defineConfig([
  {
    files: ["*.ts"],
    languageOptions: {
      globals: {},
      parserOptions: {},
      project: ["tsconfig.json"],
      createDefaultProgram: true
    },
    extends: [@angularEslint.configs["recommended"], @angularEslint.configs["template/process-inline-templates"]],
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
    languageOptions: {
      globals: {},
      parserOptions: {}
    },
    extends: [@angularEslint.configs["template/recommended"]],
  }
]);
