/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Accent
                primary: "#3A5A40", // Deep sophisticated green
                "primary-light": "#588157",

                // Backgrounds
                "background-light": "#F5F5F0", // Warm distinctive cream
                "background-subtle": "#EAEAE5",
                "background-dark": "#0A0F0D", // Rich black-green

                // Text
                "text-main": "#1A1C1B",
                "text-muted": "#5C6B64",
                "text-light": "#F9F9F7",

                // Special
                "archive-bg": "#121212",
                "archive-blue": "#2121CE",
                chalk: "#F9F9F7",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
                display: ["Space Grotesk", "sans-serif"],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
