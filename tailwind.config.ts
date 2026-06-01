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
        bg: {
          DEFAULT: '#04080f',
          2: '#070c17',
          3: '#0b1220',
          4: '#0f1929',
        },
        cyan: '#00e5ff',
        'neon-green': '#39ff14',
        primary: '#e8f0fe',
        grey: '#7d8fa4',
        muted: '#374558',
        orange: '#ff6b35',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        code: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
