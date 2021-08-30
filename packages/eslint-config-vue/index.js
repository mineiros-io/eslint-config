module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@mineiros/eslint-config-typescript',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    // 'vue/no-v-html': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
