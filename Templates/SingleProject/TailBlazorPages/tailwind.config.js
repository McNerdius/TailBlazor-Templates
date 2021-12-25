module.exports = {
    content: [
        './**/*.{razor,html,cshtml}'
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
            },
            flex: {
                'fill': '1 0 100%',
            },
        }
    },
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/typography"),
        require('tailwindcss-debug-screens')
    ]
}