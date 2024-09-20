/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Orbitron", "sans-serif"],
      serif: ["serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
