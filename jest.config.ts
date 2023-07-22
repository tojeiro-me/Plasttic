import type {Config} from 'jest';

// require('@jest/types');
// require('ts-jest/presets');

/**
 * See https://jestjs.io/docs/configuration
 */

const config: Config = {
  bail: 0,
  verbose: false,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['tests/jest/test'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['?(*.)+(spec|test).(js|ts)'],
};

export default config;