module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      parserOptions: {
        sourceType: 'script'
      },
      extends: [
        'plugin:@typescript-eslint/disable-type-checked',
        'plugin:i18next/recommended'
      ],
      files: ['./**/*.js']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 4],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true, code: 100 }
      }
    ],
    'max-len': ['error', { ignoreComments: true }]
  }
}
