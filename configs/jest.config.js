/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "jsdom",
  rootDir: "../",
  setupFiles: ["./tests/setup.ts"],
};
