import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0e2d3c',
          dark: '#050f15',
          light: '#163d52',
          lightest: '#1e4f6a',
        },
        copper: {
          DEFAULT: '#c97a3c',
          light: '#e09a5c',
          glow: '#c97a3c66',
        },
        gold: '#c4a87a',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #0e2d3c 0%, #050f15 100%)',
        'copper-gradient': 'linear-gradient(135deg, #c97a3c 0%, #e09a5c 100%)',
      },
    },
  },
  plugins: [],
}

export default config
