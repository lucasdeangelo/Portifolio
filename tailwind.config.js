/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'roxo': '#3D0066',
        'bege': '#FFFCF2',
        'amarelo': '#FFD500',
        'amarelohover': '#F5CD00',
        'preto': '#1E1E1E',        
      },
      boxShadow: {        
        'xl': '0px 3px 9.3px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
