import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    pokemons: [],
};
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const indexPokemon = state.pokemons.findIndex(
                (pokemon) => pokemon.id === action.payload
            );
            if (indexPokemon >= 0) {
                state.pokemons[indexPokemon].favorite =
                    !state.pokemons[indexPokemon].favorite;

                state.pokemons = state.pokemons;
            }
        },
    },
});

export const { setFavorite, setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
