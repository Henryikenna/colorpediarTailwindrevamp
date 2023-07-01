/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      // twsm: '640px',
      // twmd: '768px',
      // twlg: '1024px',
      // twxl: '1280px',
      // tw2xl: '1536px'
    },
    fontFamily:{
      'inter': ["Inter", 'sans-serif'],
      'montserrat': ["Montserrat", 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    colors:{
      azure: '#007ff0',
      black: '#000000',
      blue: '#0000FF',
      white: '#ffffff',
      brown: '#964B00',
      cyan: '#00ffff',
      green: '#00FF00',
      grey: '#808080',
      magenta: '#FF00FF',
      orange: '#FF8000',
      pink: '#ffc0cb',
      purple: '#800080',
      violet: '#EE82EE',
      red: '#FF0000',
      rose: '#FF0080',
      yellow: '#FFFF00',
    },
    extend: {},
  },
  plugins: [],
}

