const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        '!**/{bin,obj,node_modules}/**',
        '**/*.{razor,html}',
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