import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  roots: [
    'src'
  ],
  moduleNameMapper: {
    "@app/store": ["<rootDir>/src/store/index.ts"],
    "@app/models": ["<rootDir>/src/models/index.ts"],
    "@app/services": ["<rootDir>/src/services/index.ts"]
  }
};

export default config;