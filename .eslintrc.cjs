module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'eslint-config-prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': ['warn'],
    'no-var': ['error'],
  },
};
