import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#009999',
        sub: '#F0F0F0',
        accent: '#344B78',
        caution: '#FFC107'
      }
    }
  }
};
export default config;
