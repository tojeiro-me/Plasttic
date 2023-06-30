require('@jest/types');
require('ts-jest/presets');

/**
 * See https://jestjs.io/docs/configuration
 */
module.exports = {
  bail: 0,
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['tests/jest/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts)'],
};
