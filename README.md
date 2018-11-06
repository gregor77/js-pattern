# javascript pattern with Mocha test framework
practice javascript ES5 syntax with Mocha

## Mocha, chai, jsdom
BDD style
* jsdom : https://github.com/tmpvar/jsdom/blob/master/README.md
  - env
  - virtualConsole
* chai : http://chaijs.com/

## ESLint
* ESLint : http://eslint.org/docs/user-guide/getting-started
* best javascript lint tool?
  - https://www.sitepoint.com/comparison-javascript-linting-tools/
  - google trend : https://trends.google.com/trends/explore?q=JSLint,JSHint,JSCS,ESLint
 

```
: "jest --config test/unit/jest.conf.js --coverage",


const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "\\.(css|jpg|png)$": "<rootDir>/test/unit/mocks/emptyModule.js",
    '^expose-loader(.*)$': '<rootDir>/test/unit/mocks/emptyModule.js',
    'Guide{1}$': '<rootDir>/test/unit/mocks/emptyModule.js'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup', 'jest-localstorage-mock'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**',
    '!src/App.vue',
    '!src/apiConfig.js',
    '!src/components/guide/**',
    '!src/components/Guide.vue',
    '!src/assets/**',
    '!src/components/Main.vue',
    '!src/components/Inspection.vue',
    '!src/components/IconLibrary.vue',
    '!src/components/error/Error.vue',
    '!src/components/popup/Terms.vue',
    '!src/components/popup/contents/**',
    '!src/components/DesignThinking.vue'
  ],
  coverageReporters: [
    "text",
    "cobertura",
    "lcov",
  ],
  testURL: "http://localhost/template"
}


```
