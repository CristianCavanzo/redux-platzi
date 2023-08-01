import { PokemonDetail } from 'types/pokemons';
import { PokemonActions } from './constants';
import { Pokemon } from 'services/PokemonServices';
const pokemonClass = new Pokemon();

export const setPokemons = (payload: PokemonDetail[]) => ({
    type: PokemonActions.SET_POKEMONS,
    payload,
});
export const setLoading = (payload: boolean) => ({
    type: PokemonActions.ACTIVE_LOADER,
    payload,
});

export const getPokemonDetails =
    (pokemons = []) =>
    async (dispatch) => {
        dispatch(setLoading(true));
        const pokemonDetails = await Promise.all(
            pokemons.map(
                async (pokemon) =>
                    await pokemonClass.getPokemonDetails(pokemon.name)
            )
        );
        dispatch(setPokemons(pokemonDetails));
        dispatch(setLoading(false));
    };

export const setFavorite = (payload: number) => ({
    type: PokemonActions.SET_FAVORITE,
    payload,
});
