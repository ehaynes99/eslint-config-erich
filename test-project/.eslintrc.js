module.exports = {
  extends: ['eslint-config-erich-typescript-node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
