module.exports = {
  rootDir: './',
  coverageDirectory: '<rootDir>/public/_coverage',
  moduleDirectories: ['node_modules', 'src'],
  coveragePathIgnorePatterns: ['<rootDir>/config'],
  testRegex: '(/__tests__/.*|\\.(spec))\\.(jsx?)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\theme.(css)$': 'identity-obj-proxy',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    '^components': '<rootDir>/components',
    '^utils': '<rootDir>/utils',
    '^definitions': '<rootDir>/definitions',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFiles: ['<rootDir>/config/jest.polyfills.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
