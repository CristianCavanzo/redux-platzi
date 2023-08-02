import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons';
import { UIReducer } from './ui';
import pokemonSlice from 'slices/pokemonSlice';

export const rootReducer = combineReducers({
    data: pokemonSlice,
    ui: UIReducer,
});
