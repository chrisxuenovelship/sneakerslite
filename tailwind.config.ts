import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#06b6d4',
        'brand-dark': '#1a1a1a',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        'heading': ['DM Sans', 'Montserrat', 'sans-serif'],
        'body': ['Inter', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
