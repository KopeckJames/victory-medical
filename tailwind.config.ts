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
        // Semantic palette (sourced from victorymed.com)
        brand: {
          DEFAULT: '#226d7a',
          deep: '#1e6d7a',
          darker: '#163d52',
        },
        accent: {
          DEFAULT: '#22b8d1',
          light: '#4fc8dd',
          glow: 'rgba(34,184,209,0.35)',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f5fbfc',
          tinted: '#e4f5fa',
          deep: '#b0e0e9',
        },
        ink: {
          DEFAULT: '#1a3a47',
          secondary: '#4a6670',
          muted: 'rgba(26,58,71,0.65)',
        },

        // Legacy aliases (kept so unconverted components still compile / render OK)
        teal: {
          DEFAULT: '#ffffff',
          dark: '#f5fbfc',
          light: '#e4f5fa',
          lightest: '#b0e0e9',
        },
        copper: {
          DEFAULT: '#22b8d1',
          light: '#4fc8dd',
          glow: 'rgba(34,184,209,0.4)',
        },
        gold: '#226d7a',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #ffffff 0%, #e4f5fa 100%)',
        'copper-gradient': 'linear-gradient(135deg, #22b8d1 0%, #4fc8dd 100%)',
        'brand-gradient': 'linear-gradient(135deg, #226d7a 0%, #22b8d1 100%)',
      },
    },
  },
  plugins: [],
}

export default config
