module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "next", "next/core-web-vitals"],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {},
};
