module.exports = {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    "setupFilesAfterEnv": ["@testing-library/jest-dom","<rootDir>/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  