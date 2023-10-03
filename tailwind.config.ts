import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        circularLight: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px , #FFFFFF 5px, #FFFFFF 100px );',
        circularDark: ' repeating-radial-gradient(rgba(255,255,255,0.5) 2px , #020617 5px, #020617 100px );',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        'spin-slow':'spin 15s linear infinite',
      }
     
  },
  
  plugins: [],
  
}
}
export default config
