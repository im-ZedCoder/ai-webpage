import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: 'var(--font-vazirmatn)',
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: 'var(--font-geist-mono)',
      },
      colors: {
        primary: '#00d9ff',
        accent: '#a855f7',
      },
      animation: {
        'gradient-shift': 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
