module.exports = {
  root: true,
  env: {
    jest: true,
    es2022: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint', //
    'etc',
    'import',
    'simple-import-sort',
    'unicorn',
    'unused-imports',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
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
        'curly': ['error', 'multi-line'],
        'eqeqeq': ['error', 'always', { null: 'never' }],
        ...{
          'no-duplicate-imports': 'off',
          'import/no-duplicates': 'error',
        },
        'max-statements-per-line': ['error', { max: 1 }],
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-empty': 'error',
        'no-eval': 'error',
        'no-extra-boolean-cast': 'off',
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              ['^'],
            ],
          },
        ],
        'spaced-comment': ['error', 'always', { block: { balanced: true } }],
        'unicorn/prefer-node-protocol': 'error',
        'unused-imports/no-unused-imports': 'error',
        ...{
          'no-unused-vars': 'off',
          'unused-imports/no-unused-vars': [
            'error',
            {
              argsIgnorePattern: '^_',
              varsIgnorePattern: '^_',
              args: 'after-used',
              ignoreRestSiblings: true,
            },
          ],
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      rules: {
        '@typescript-eslint/await-thenable': 'error',
        ...{
          'dot-notation': 'off',
          // use dot.notation for regular properties, but allow brackets for unusual names like headers
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
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        ...{
          'no-implied-eval': 'off',
          '@typescript-eslint/no-implied-eval': 'error',
        },
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        ...{
          'no-unused-expressions': 'off',
          '@typescript-eslint/no-unused-expressions': 'error',
        },
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/prefer-includes': 'error',
        'etc/no-implicit-any-catch': 'error',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // use dot.notation for regular properties, but allow brackets for unusual names like headers
        'dot-notation': ['warn', { allowPattern: '^([a-z]+(_[a-z]+)+|[A-Z].*)$' }],
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      },
    },
  ],
}
