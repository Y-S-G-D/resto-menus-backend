module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/tests/**/*.test.js', '**/src/tests/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
};