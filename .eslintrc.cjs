module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended"
  ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parser: '@typescript-eslint/parser',
  plugins: [ "react-refresh", "react", "react-hooks", "html" ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false
      }
    ],
    "react/prop-types": 0, // 关闭对 PropTypes 的检查。
    "react/react-in-jsx-scope": 0, // react18 中 jsx语法不再需要引入react
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    "react/no-unknown-property": 0
  },
}
