const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './**/*.{razor,html,cshtml}'
    ],
    theme:
    {
        extend:
        {
            colors: {
                'dotnet-blurple': '#512BD4',
                'link-blue': colors.blue[500]
            },
            animation: {
                'spin-slow': 'spin 7s linear infinite',
            }
        }
    },
    darkMode: 'class',
    plugins: [
        require('tailwindcss-debug-screens')
    ]
}