module.exports = {
    content: [
        './**/*.{razor,html,cshtml}'
    ],
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/typography"),
        require('tailwindcss-debug-screens')
    ]
}