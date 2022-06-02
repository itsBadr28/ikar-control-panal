module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Yantramanav'],

      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1100: '1100ms',
        1200: '1200ms',
      },
      colors: {
        gray: {
          400: '#969798',
          500: '#666666',
          700: '#353535',
          800: '#262626',
          900: '#171818',
        },
      },
    },
  },
  plugins: [],
};
