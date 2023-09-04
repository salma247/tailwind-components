/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#202938',
        'dark-blue': '#121929',
        'white': '#e2eaf4',
      },
    },
  },
  plugins: [],
}

