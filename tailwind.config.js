module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Genshin', 'sans-serif'],
                serif: ['Poppins', 'sans-serif'],
            },
            colors: {
                background: '#202442',
                'background-secondary': '#25294A',
                item: '#2D325A',
                primary: '#4E7CFF',
                navigation: '#4E7CFFCC',
                button: '#394076',
                rare: {
                    from: '#D28FD6',
                    to: '#665680',
                },
                legendary: {
                    from: '#FFB13F',
                    to: '#846332',
                },
            },
            borderRadius: {
                xl: '12px',
                '2xl': '16px',
            },
            boxShadow: {
                rare: '0 0 0 3px rgba(173, 118, 176, 0.5)',
                legendary: '0 0 0 3px rgba(185, 129, 46, 0.5)',
                outline: '0 0 0 2px #4E7CFF',
                select: '0 20px 16px rgba(0, 0, 0, 0.5)',
            },
            height: {
                14: '3.5rem',
            },
            width: {
                14: '3.5rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
