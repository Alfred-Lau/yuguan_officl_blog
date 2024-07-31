module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ["next", "next/core-web-vitals"],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {},
};
