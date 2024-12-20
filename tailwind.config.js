/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundSize: {
        'custom-size': '1928px 1080px ',
      },

      
      
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      width: {
        'desktop': '500px',
        'tablet': '309px',
        'mobile': '375px',
      },
      fontFamily: {
        sans : ['Lato', 'sans-serif']
      },
      
      colors: {
        lightGray: '#202026',
        mediumGray: '#18181D',
        darkGray: '#080808',
      }
    },
  },
  plugins: [],
}

