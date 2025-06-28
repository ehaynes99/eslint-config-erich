import type { TSESLint } from '@typescript-eslint/utils'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import tsConfig from './ts.config.js'

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config({
  files: ['**/*.tsx'],
  extends: [...tsConfig],
  plugins: {
    '@react-hooks': reactHooks,
    '@react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
})

export default config
