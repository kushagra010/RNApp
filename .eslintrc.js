module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
    'airbnb-typescript',
  ],
  overrides: [],
  settings: {
    // issue: https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['react-native'],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'prettier',
    'react-hooks',
    'jsx-a11y',
    'react-native',
  ],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    // issue: https://github.com/Intellicode/eslint-plugin-react-native/issues/22
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    'react-native/no-inline-styles': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-alert': 2,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-duplicate-imports': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // issue: https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: ['TSIntersectionType', 'TSTypeParameterInstantiation'],
      },
    ],
  },
};
