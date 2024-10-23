/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bushaGray: "#E8EEE8",
        bushaGreen: "#16CB3E",
        bushaRed: "#F04438" //coralRed
      }
    },
  },
  plugins: [],
}

