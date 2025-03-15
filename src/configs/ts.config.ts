import { fixupPluginRules } from '@eslint/compat'
import type { TSESLint } from '@typescript-eslint/utils'
import tseslint from 'typescript-eslint'

import ehaynesPlugin from '../plugins/index.js'
import jsConfig from './js.config.js'
import prettierConfig from './prettier.config.js'

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [...jsConfig, ...tseslint.configs.recommended],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@ehaynes': fixupPluginRules(ehaynesPlugin),
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.ts', '__mocks__/*/*.ts'],
        },
      },
    },
    rules: {
      '@ehaynes/no-implicit-any-catch': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      ...{
        // use dot.notation for regular properties, but allow brackets for unusual names like headers
        'dot-notation': 'off', // overridden by @typescript-eslint/dot-notation
        '@typescript-eslint/dot-notation': [
          'warn',
          {
            allowPattern: '^([a-z]+(_[a-z]+)+|[A-Z].*)$',
            allowPrivateClassPropertyAccess: true,
            allowProtectedClassPropertyAccess: true,
          },
        ],
      },
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      ...{
        'no-implied-eval': 'off', // overridden by @typescript-eslint/no-implied-eval
        '@typescript-eslint/no-implied-eval': 'error',
      },
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      ...{
        'no-unused-expressions': 'off', // overridden by @typescript-eslint/no-unused-expressions
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      },
      '@typescript-eslint/no-unused-vars': 'off', // overridden by eslint-plugin-unused-imports
      '@typescript-eslint/prefer-includes': 'error',
    },
  },
  ...prettierConfig,
)

export default config
