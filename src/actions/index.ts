import { PokemonDetail, PokemonsGetAll } from 'types/pokemons';
import { PokemonActions } from './constants';

export const setPokemons = (payload: PokemonDetail[]) => ({
    type: PokemonActions.SET_POKEMONS,
    payload,
});
