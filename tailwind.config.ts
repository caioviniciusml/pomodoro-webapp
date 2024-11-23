import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/*.tsx',
    './src/App.tsx',
    './index.html'
  ],
  theme: {
    colors:{
      black: '#000',
      snow: '#e5e5e5'
    },
    fontFamily:{
      bakbak: ['"Bakbak"']
    },
    extend: {}
  },
  plugins: [],
} satisfies Config
