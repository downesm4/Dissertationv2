/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                baloo: ['"Baloo Chettan 2"', 'cursive'],
            },
        },
    },
    plugins: [],
}