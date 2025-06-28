import fs from 'node:fs'
import path from 'node:path'
import { includeIgnoreFile } from '@eslint/compat'
import type { TSESLint } from '@typescript-eslint/utils'

import jsConfig from './js.config.js'
import jsonConfig from './json.config.js'
import packageJson from './package-json.config.js'
import reactConfig from './react.config.js'
import tsConfig from './ts.config.js'
import yamlConfig from './yaml.config.js'

const gitignorePath = path.resolve(process.cwd(), '.gitignore')

const config: TSESLint.FlatConfig.ConfigArray = [
  fs.existsSync(gitignorePath) ? includeIgnoreFile(gitignorePath) : {},
  {
    ignores: ['**/pnpm-lock.yaml', '**/dist/**', '**/node_modules/**'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  ...jsConfig,
  ...jsonConfig,
  ...packageJson,
  ...reactConfig,
  ...tsConfig,
  ...yamlConfig,
]

export default config
