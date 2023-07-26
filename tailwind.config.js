/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                ...colors,
                principalColor: '#2e3057',
                gray: '#ebf3f5',
            }),
        },
    },
    plugins: [],
};
