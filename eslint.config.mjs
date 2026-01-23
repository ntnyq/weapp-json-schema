// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  prettier: false,
  oxfmt: true,
  typescript: {
    overrides: {
      '@typescript-eslint/consistent-type-imports': 'off',
    },
  },
})
