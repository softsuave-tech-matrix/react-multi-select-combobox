module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-min-length": [2, "always", 3],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "chore", "style", "refactor", "revert"],
    ],
  },
};
