import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f2ea',
        clay: '#d9c7b5',
        pine: '#2f4a3a',
        moss: '#6f8a70',
        sunrise: '#d98c5f',
        ink: '#1f2326'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px -20px rgba(31, 35, 38, 0.4)'
      },
      backgroundImage: {
        'gentle-radial': 'radial-gradient(circle at top, rgba(217, 140, 95, 0.15), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
