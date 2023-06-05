module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 4]
  }
}
