// version 2.1.8

// This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
  },
  plugins: ['html', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-use-before-define': 'off',
    'import/no-cycle': 'off',
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
        varsIgnorePattern: '^_',
        // Broken in TypeSCript.Want this turned on
        // destructuredArrayIgnorePattern: '^_',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/comma-dangle': ['off'],
  },
  overrides: [
    {
      files: ['src/assets/js/**/*.ts'],
      extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
      plugins: ['prettier', '@typescript-eslint'],
      env: {
        es6: true,
        browser: true,
        node: true,
        jquery: true,
        jest: true,
      },
      // Then we add our own custom typescript rules
      rules: {
        // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
          'warn',
          {
            ignoreDeclarationMerge: true,
          },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        // this is covered by the typescript compiler, so we don't need it
        'no-undef': 'off',
        'no-shadow': 'off', // TS does it
        'no-debugger': 0,
        'no-use-before-define': 'off',
        'import/no-cycle': 'off',
        'no-alert': 0,
        'no-await-in-loop': 0,
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-syntax': [
          2,
          'ForInStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
          },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'no-unused-expressions': [
          'error',
          {
            allowTaggedTemplates: true,
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        'no-param-reassign': [
          2,
          {
            props: false,
          },
        ],
        'no-console': 0,
        'import/prefer-default-export': 0,
        import: 0,
        'func-names': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'max-len': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'import/no-extraneous-dependencies': 0,
        'react/jsx-filename-extension': 0,
        radix: 0,
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        '@typescript-eslint/comma-dangle': ['off'],
      },
    },
  ],
};
