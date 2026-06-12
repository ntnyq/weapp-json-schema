// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  oxfmt: true,
  prettier: false,
  typescript: {
    overrides: {
      '@typescript-eslint/consistent-type-imports': 'off',
    },
  },
})
