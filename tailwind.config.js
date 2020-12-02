module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Orbitron', 'sans-serif'],
      serif: ['serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
