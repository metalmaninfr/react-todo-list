module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', "prettier"],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["prettier/@typescript-eslint"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            varsIgnorePattern: "_",
            ignoreRestSiblings: true,
          },
        ],
      },
    }
  ]
}
