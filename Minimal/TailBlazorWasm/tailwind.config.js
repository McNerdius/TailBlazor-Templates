module.exports = {
    content: [
        './**/*.{razor,html}'
    ],
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/typography"),
        require('tailwindcss-debug-screens')
    ]
}