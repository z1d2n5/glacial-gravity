/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#0A0A0F', // Main Background
                    card: '#1E1E2E',    // Card Background
                    hover: '#2D2D3F',
                },
                primary: {
                    DEFAULT: '#2563EB', // Navbar Blue
                    dark: '#1E40AF',
                },
                accent: {
                    primary: '#3B82F6',   // Vivid Blue
                    secondary: '#6366F1', // Indigo
                },
                text: {
                    main: '#FFFFFF',
                    muted: '#94A3B8',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #3B82F6' },
                    '100%': { boxShadow: '0 0 20px #3B82F6, 0 0 10px #6366F1' },
                }
            }
        },
    },
    plugins: [],
}
