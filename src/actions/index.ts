import { PokemonsGetAll } from 'types/pokemons';
import { PokemonActions } from './constants';

export const setPokemons = (payload: PokemonsGetAll['results']) => ({
    type: PokemonActions.SET_POKEMONS,
    payload,
});
