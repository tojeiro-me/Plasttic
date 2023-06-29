require('@jest/types');
require('ts-jest/presets');

module.exports = {
  bail: 0,
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['tests/jest/']
};
