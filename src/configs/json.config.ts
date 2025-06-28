import type { TSESLint } from '@typescript-eslint/utils'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'

import { combineConfigs } from '../utils/index.js'

const config: TSESLint.FlatConfig.ConfigArray = combineConfigs({
  files: ['.changeset/*.json', '.vscode/settings.json', 'knip.jsonc', 'turbo.json'],
  languageOptions: {
    parser: jsoncParser,
  },
  plugins: {
    jsonc: eslintPluginJsonc,
  },
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        pathPattern: '.*',
        order: { type: 'asc' },
      },
    ],
    'jsonc/sort-keys': 'error',
  },
})

export default config
