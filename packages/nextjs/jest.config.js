// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/*.test.ts", "**/*.test.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/app/api/**/*.{js,ts}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
