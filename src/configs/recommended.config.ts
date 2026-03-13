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

const findGitRoot = (startDir: string): string | undefined => {
  let dir = startDir
  while (true) {
    if (fs.existsSync(path.join(dir, '.git'))) return dir
    const parent = path.dirname(dir)
    if (parent === dir) return undefined
    dir = parent
  }
}

const getGitignoreConfig = (): TSESLint.FlatConfig.Config => {
  const gitRoot = findGitRoot(process.cwd())
  if (!gitRoot) return {}
  const gitignorePath = path.join(gitRoot, '.gitignore')
  if (!fs.existsSync(gitignorePath)) return {}
  return includeIgnoreFile(gitignorePath)
}

const config: TSESLint.FlatConfig.ConfigArray = [
  getGitignoreConfig(),
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
