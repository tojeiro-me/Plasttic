import type { Config } from 'jest';

/**
 * See https://jestjs.io/docs/configuration
 */

const config: Config = {
  bail: 0,
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests/jest/build/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageProvider: 'babel',
  coverageDirectory: '<rootDir>/tests/jest/reports/',
  testMatch: ['**/?(*.)+(spec|test).[jt]s'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  }
};

export default config;