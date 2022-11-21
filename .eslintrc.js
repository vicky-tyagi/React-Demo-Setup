module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
		node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
		'semi': ['error', 'never'],
		'quotes': [2, 'single', { 'avoidEscape': true }]
    },
    'globals': { '_': true },
}
