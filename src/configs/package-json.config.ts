import type { TSESLint } from '@typescript-eslint/utils'
import packageJsonPlugin from 'eslint-plugin-package-json'
import jsoncParser from 'jsonc-eslint-parser'

import { combineConfigs } from '../utils/index.js'

const config: TSESLint.FlatConfig.ConfigArray = combineConfigs({
  files: ['**/package.json'],
  languageOptions: {
    parser: jsoncParser,
  },
  plugins: {
    'package-json': packageJsonPlugin,
  },
  rules: {
    'package-json/order-properties': 'error',
    'package-json/sort-collections': 'error',
    'package-json/unique-dependencies': 'error',
  },
})

export default config
