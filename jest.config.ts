import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '.html-report',
      filename: 'report.html',
      expand: true,
    }]
  ],
  // Other Jest options...
};

export default config;