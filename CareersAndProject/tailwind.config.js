/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        selamBlue: '#2BA6FF',
        selamGold: '#AA7A26',
        selamTeal: '#12664F',
        selamSlate: '#414361',
        selamNavy: '#2A2D43',
        selamWhite: '#F8FAFC',
        selamOffWhite: '#F1F5F9',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
};