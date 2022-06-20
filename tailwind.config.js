/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '4/1': '400%',
        '256': '975px',
      },
      margin: {
        '1/4': '-25%',
        '1/2': '-50%',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: { body: ['Anek Malayalam'] },
    screens: {
      'mobile-S': '320px',
      'mobile-L': '450px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [],
}
