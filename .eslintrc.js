module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'eslint-config-prettier',
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['eslint-plugin-prettier', 'react'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'avoid',
                semi: true,
                trailingComma: 'none',
                endOfLine: 'lf',
                printWidth: 100,
                singleQuote: true,
                tabWidth: 4,
                useTabs: false,
                jsxSingleQuote: false
            }
        ]
    }
};
