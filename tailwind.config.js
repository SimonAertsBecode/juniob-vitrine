/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fe5e41',
        background: '#35000e',
        secondary: '#424b54',
        content: '#e7e4cb',
      },
    },
  },
  plugins: [],
};