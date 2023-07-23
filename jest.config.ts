import type { Config } from 'jest';
import type { JestConfigWithTsJest } from 'ts-jest';

// require('@jest/types');
// require('ts-jest/presets');

/**
 * See https://jestjs.io/docs/configuration
 */

const config: JestConfigWithTsJest = {
  bail: 0,
  verbose: true,
  // preset: 'ts-jest',
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.ts$': 
      'ts-jest',
    },
  testEnvironment: 'node',
  roots: ['<rootDir>/tests/jest/test/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageProvider: 'babel',
  coverageDirectory: '<rootDir>/tests/jest/reports/',
  testMatch: ['**/?(*.)+(spec|test).[jt]s']
};

export default config;