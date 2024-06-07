import prettier from 'eslint-plugin-prettier';
import jest from 'eslint-plugin-jest';
import typescript from '@typescript-eslint/eslint-plugin';

import airbnbConfig from 'eslint-config-airbnb-base';
import prettierConfig from 'eslint-config-prettier';
import importConfig from 'eslint-plugin-import';
import jestConfig from 'eslint-plugin-jest';
import playwrightConfig from 'eslint-plugin-playwright';
import nConfig from 'eslint-plugin-n';

import airbnbConfigTypescript from 'eslint-config-airbnb-typescript';
import typescriptConfig from '@typescript-eslint/eslint-plugin';

import babelParser from "@babel/eslint-parser";

export default [ 
  //airbnbConfig,
  prettierConfig,
  importConfig.configs.recommended,
  jestConfig.configs.recommended,
  playwrightConfig.configs.recommended,
  nConfig.configs.recommended,
  {
  plugins: {
    prettier: prettier, 
    jest: jest,
    import: importConfig,
    jest: jestConfig,
    playwright: playwrightConfig,
    n: nConfig,
  },
  files: [
    'src/assets/js/**/*.js', 
    'tests/**/**/*.js'
  ],
  ignores: [
    'node_modules/**', 
    'dist/**', 
    'dev/**',
    'package/**',
    'tests-examples/**',
    '~partytown/**',
    'ts-no.ts',
    '**/vendor/**',
  ],
  settings: {
    'import/resolver': {
      node: true,
    },
  },
  languageOptions: {
    parser: babelParser,
    requireConfigFile: false,
    ecmaVersion: 'latest',
  },
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
      'warn',
      {
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'es5',
        tabWidth: 2,
      },
    ],
    '@typescript-eslint/comma-dangle': ['off'],
    'n/exports-style': ['error', 'module.exports'],
  },
  overrides: [
    //airbnbConfigTypescript,
    //prettierConfig,
    //typescriptConfig.configs.recommended,
    ////typescriptConfig.configs.recommended-requiring-type-checking,
    //importConfig.configs.recommended,
    //importConfig.configs.typescript,
    //jestConfig.configs.recommended,
    //playwrightConfig.configs.recommended,
    {
      plugins: {
        prettier: prettier, 
        jest: jest, 
        typescript: typescript,
      },
      files: ['src/assets/js/**/*.ts', 'tests/**/**/*.ts'],
      ignores: [
        'node_modules/**', 
        'dist/**', 
        'dev/**',
        'package/**',
        'tests-examples/**',
        '~partytown/**',
        'ts-no.ts',
        '**/vendor/**',
      ],
      settings: {
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: true,
        tsconfigRootDir: './',
      },
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
        'import/no-unresolved': 'error',
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
          'warn',
          {
            singleQuote: true,
            endOfLine: 'auto',
            trailingComma: 'es5',
            tabWidth: 2,
          },
        ],
        '@typescript-eslint/comma-dangle': ['off'],
      },
    },
  ],
}
]
