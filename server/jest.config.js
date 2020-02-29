module.exports = {
  moduleNameMapper: {
    '^common$': '<rootDir>/../common',
  },
  moduleDirectories: ['node_modules', '<rootDir>/../node_modules'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};
