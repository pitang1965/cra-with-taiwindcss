module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      cra: '#282c34',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      reactBlue: '#61dafb',
    }),
    extend: {
      animation: {
        spinSlow: 'spinSlow infinite 20s linear',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      height: {
        "40v": "40vh",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
