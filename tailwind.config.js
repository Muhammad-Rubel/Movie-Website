module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        scrollerGrey: '#dbdbdb',
        lightGrey: '#e3e3e3',
        darkerGrey: '#c8c8c8',
        darkBlue: '#032541',
        lightBlue: '#01b4e4',
        lighterGreen: '#c0fecf',
        lightGreen: '#1ed5a9',
        logoGreen: '#90cea1',
        logoOrange: '#fdc170',
        logoRed: '#d93b63',
        silver: '#959595',
        sink: '#ea148c',
        purple: '#805be7',
        green: '#01d277',
        teal: '#01c6ac',
        blue: '#0177d2',
        orange: '#d27701',
        yellow: '#d29001',
        red: '#d40242',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
