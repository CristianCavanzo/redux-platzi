/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                principalColor: '#2e3057',
                gray: '#ebf3f5',
                typePokemons: {
                    water: '#82c4e2',
                    fire: '#ff9f88',
                    grass: '#a4d9ab',
                    electric: '#fdd770',
                    ground: '#d9893b',
                    flying: '#9edbd9',
                    normal: '#c4d1d2',
                    fighting: '#e57d71',
                    psychic: '#d8a0d1',
                    ice: '#f0f0f0',
                    poison: '#d8a0d1',
                    bug: '#a4d9ab',
                    rock: '#b8c3c4',
                    ghost: '#cfa7da',
                    dragon: '#c9d1d8',
                    dark: '#8c8c8c',
                    steel: '#c4d1d2',
                    fairy: '#f48fb1',
                },
            },
        },
    },
    plugins: [],
};
