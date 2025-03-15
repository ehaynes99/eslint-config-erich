import path from 'node:path'
import { includeIgnoreFile } from '@eslint/compat'
import type { TSESLint } from '@typescript-eslint/utils'

import jsConfig from './js.config.js'
import reactConfig from './react.config.js'
import tsConfig from './ts.config.js'
import yamlConfig from './yaml.config.js'

const gitignorePath = path.resolve(import.meta.dirname, '../../.gitignore')

const config: TSESLint.FlatConfig.ConfigArray = [
  includeIgnoreFile(gitignorePath),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  ...jsConfig,
  ...reactConfig,
  ...tsConfig,
  ...yamlConfig,
]
export default config
