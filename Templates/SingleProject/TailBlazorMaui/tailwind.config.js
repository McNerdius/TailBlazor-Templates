module.exports = {
    content: [
        './**/*.{razor,html}'
    ],
    theme:
    {
        extend:
        {
            colors: {
                'dotnet-blurple': '#512BD4'
            },
            animation: {
                'spin-slow': 'spin 7s linear infinite',
            }
        }
    },
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/typography"),
        require('tailwindcss-debug-screens')
    ]
}