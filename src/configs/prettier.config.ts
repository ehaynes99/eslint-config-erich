import type { TSESLint } from '@typescript-eslint/utils'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(eslintPluginPrettierRecommended, {
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        quoteProps: 'consistent',
      },
    ],
  },
})

export default config
