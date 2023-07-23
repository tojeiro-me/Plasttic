import type {Config} from 'jest';

// require('@jest/types');
// require('ts-jest/presets');

/**
 * See https://jestjs.io/docs/configuration
 */

const config: Config = {
  bail: 0,
  verbose: true,
  preset: 'ts-jest',
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