import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Pokemon } from 'services/PokemonServices';
import { setLoader } from './uiSlice';

export const fetchPokemonsWithDetails = createAsyncThunk(
    'pokemons/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoader(true));
        const pokemonClass = new Pokemon();
        const { results: pokemons } = await pokemonClass.getAllPokemons();
        const pokemonDetails = await Promise.all(
            pokemons.map(
                async (pokemon) =>
                    await pokemonClass.getPokemonDetails(pokemon.name)
            )
        );
        dispatch(setPokemons(pokemonDetails));
        dispatch(setLoader(false));
    }
);

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
