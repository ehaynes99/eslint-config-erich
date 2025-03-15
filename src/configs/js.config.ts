import type { TSESLint } from '@typescript-eslint/utils'
import eslintPluginImportX from 'eslint-plugin-import-x'
import pluginSecurity from 'eslint-plugin-security'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'

import { combineConfigs } from '../utils/index.js'
import prettierConfig from './prettier.config.js'

const config: TSESLint.FlatConfig.ConfigArray = combineConfigs(
  {
    files: ['**/*.js'],
  },
  {
    extends: [pluginSecurity.configs.recommended],
    rules: {
      'security/detect-bidi-characters': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-new-buffer': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-non-literal-regexp': 'off',
      'security/detect-non-literal-require': 'error',
      'security/detect-object-injection': 'off',
      'security/detect-possible-timing-attacks': 'off',
      'security/detect-pseudoRandomBytes': 'error',
      'security/detect-unsafe-regex': 'off',
    },
  },
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // A single group, with the three ordered sections of node:, 3rd party packages, then our own @openphone packages.
            ['^node:', '^@?(?!openphone)\\w', '^@?\\w'],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
          ],
        },
      ],
    },
  },
  {
    plugins: { 'import-x': eslintPluginImportX },
    settings: {
      'import-x/cache': {
        lifetime: Infinity,
      },
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import-x/resolver': {
        typescript: {
          project: true,
        },
        node: true,
      },
    },
    rules: {
      'import-x/first': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'eslint.config.{js,mjs}',
            '**/test/**/*.[jt]s',
            '**/*.{test,spec}.[jt]s',
            'vitest.config.[jt]s',
          ],
          optionalDependencies: false,
        },
      ],
      ...{
        'no-duplicate-imports': 'off', // disabled in favor of import-x/no-duplicates' (https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md)
        'import-x/no-duplicates': 'error',
      },
      'import-x/no-relative-packages': 'error',
    },
  },
  {
    plugins: { 'unused-imports': unusedImports },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      ...{
        'no-unused-vars': 'off', // overridden by eslint-plugin-unused-imports
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'local',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  },
  {
    plugins: { unicorn: eslintPluginUnicorn },
    rules: { 'unicorn/prefer-node-protocol': 'error' },
  },
  {
    rules: {
      'curly': ['error', 'multi-line'],
      'eqeqeq': ['error', 'always', { null: 'never' }],
      'max-statements-per-line': ['error', { max: 1 }],
      'no-constant-condition': ['error', { checkLoops: false }], // allow `while (true)`
      'no-empty': 'error',
      'no-eval': 'error',
      'no-extra-boolean-cast': 'off',
      'no-useless-rename': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-promise-reject-errors': 'error',
      'require-extensions/require-extensions': 'off',
      'require-extensions/require-index': 'off',
      'spaced-comment': ['error', 'always', { block: { balanced: true } }],
    },
  },
  ...prettierConfig,
)

export default config
