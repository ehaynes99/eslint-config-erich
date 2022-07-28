module.exports = {
  root: true,
  env: {
    jest: true,
    es2022: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: [
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        // note, with prettier integration, skip rules it covers like 'semi', 'quotes' or 'arrow-parens'
        'one-var': ['error', 'never'],
        // 'one-var-declaration-per-line': ['error', 'always'],
        // prevent error for `while (true)` (but make sure to break!)
        'no-constant-condition': ['error', { checkLoops: false }],
        // use dot.notation for regular properties, but allow brackets for unusual names like headers
        'dot-notation': [
          'warn',
          { allowPattern: '^([a-z]+(_[a-z]+)+|[A-Z].*)$' },
        ],
        'space-before-function-paren': [
          'error',
          { anonymous: 'never', asyncArrow: 'always', named: 'never' },
        ],
        'spaced-comment': ['error', 'always', { block: { balanced: true } }],
        'no-duplicate-imports': 'error',
        'max-statements-per-line': ['error', { max: 1 }],
      },
    },
    {
      files: ['*.ts', '*.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      env: {
        node: true,
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', '@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
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
    {
      files: ['*.tsx', '*.jsx'],
      env: {
        browser: true,
        // enable node if using server-side rendering
        node: false,
      },
      plugins: ['react'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
      ],
      rules: {
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-curly-newline': [
          'error',
          { multiline: 'consistent', singleline: 'forbid' },
        ],
        'react/jsx-handler-names': 'off',
      },
    },
  ],
};
