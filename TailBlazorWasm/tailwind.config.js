/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    '!**/{bin,obj,node_modules}/**',
    '**/*.{razor,html}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-debug-screens')],
}
