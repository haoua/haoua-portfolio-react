/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/*.js', './src/page/*.js', './src/component/*.js'],
  theme: {
    extend: {
      colors:{
        'accent-pink':'#C98BDF',
        'primary-black':'#010c15',
        'primary-grey':'#011627',
        'primary-dark-blue':'#021626',
        'primary-blue':'#617c95',
        'lines': '#1f2d3d',
      }
    },
  },
  plugins: [],
}
