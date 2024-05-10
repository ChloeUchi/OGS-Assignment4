/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                'radio-button-color': 'var(--radio-button-color)',
            },
            fontFamily: {
                fontfont: ['varela-round-regular', ]
            }
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require("@xpd/tailwind-3dtransforms")
    ],
}