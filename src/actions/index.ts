import { PokemonDetail, PokemonsGetAll } from 'types/pokemons';
import { PokemonActions } from './constants';
import { Pokemon } from 'services/PokemonServices';
import { Dispatch } from 'react';
const pokemonClass = new Pokemon();

export const setPokemons = (payload: PokemonDetail[]) => ({
    type: PokemonActions.SET_POKEMONS,
    payload,
});

export const getPokemonDetails =
    (pokemons = []) =>
    async (dispatch) => {
        const pokemonDetails = await Promise.all(
            pokemons.map(
                async (pokemon) =>
                    await pokemonClass.getPokemonDetails(pokemon.name)
            )
        );
        dispatch(setPokemons(pokemonDetails));
    };
