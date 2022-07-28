module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { '^.+\\.[jt]s$': 'ts-jest' },
  testMatch: ['<rootDir>/src/**/*.(spec|test).(t|j)s'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coverageReporters: ['text', 'lcov', 'cobertura'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['index.ts'],
};
