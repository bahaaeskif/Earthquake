module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: 'class',
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    fontFamily: {
      p: ['Cairo', 'sans-serif'],
    }
  }
}