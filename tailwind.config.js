/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                logo: "Josefin Sans",
            },

            colors: {
                'primary': "#144272",
                'second': "#567189",
            },
        },
    },
    plugins: [],
}