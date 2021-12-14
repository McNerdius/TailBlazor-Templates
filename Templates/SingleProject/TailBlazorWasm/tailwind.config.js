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
            }
        }
    },
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/typography"),
        require('tailwindcss-debug-screens')
    ]
}