/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
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
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
};