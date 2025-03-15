import type { TSESLint } from '@typescript-eslint/utils'
import eslintPluginYml from 'eslint-plugin-yml'

import { combineConfigs } from '../utils/index.js'

const config: TSESLint.FlatConfig.ConfigArray = combineConfigs({
  files: ['**/*.yaml', '**/*.yml'],
  extends: [...eslintPluginYml.configs['flat/standard']],
  ignores: ['deployment*/templates/**/*.{yaml,yml}'],
  rules: {
    'yml/no-empty-mapping-value': 'off',
    'yml/quotes': ['error', { prefer: 'single' }],
  },
})

export default config
