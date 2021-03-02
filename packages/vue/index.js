module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["plugin:vue/vue3-recommended", "@mineirosio/eslint-config-ts"],
  plugins: ["vue"],
  rules: {
    "vue/max-attributes-per-line": ["warn", { singleline: 5 }],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
  },
};
