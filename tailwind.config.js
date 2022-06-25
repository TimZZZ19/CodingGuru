/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '24': '96px',
        '28': '112px',
        '30': '120px',
        '32': '128px',
        '59': '235px',
        '61': '244px',
        '62': '248px',
        '108': '432px',
        '110': '440px',
        '120': '480px',
        '125': '500px',
        '137': '520px',
        '256': '975px',

        '4/1': '400%',
      },
      height: {
        '40': '160px',
        '100': '400px',

        '4/1': '400%',
      },
      margin: {
        '1/4': '-25%',
        '1/2': '-50%',
        '3/4': '-75%',

        '400': '-400px',
        '800': '-800px',
        '1200': '-1200px',
      },
      transitionProperty: {
        ml: 'margin-left',
        mt: 'margin-top',
      },
      transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
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
    boxShadow: {
      'all-directions': '3px 3px 5px  , -3px -3px 5px  ',
    },
  },
  plugins: [],
}
