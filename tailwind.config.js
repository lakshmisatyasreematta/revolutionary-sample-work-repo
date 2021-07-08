module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
   darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myColor :'##E6FFFA'
             }
    },
    fontFamily: {
      body :['Roboto']
     },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
