import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons';
import { UIReducer } from './ui';

export const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: UIReducer,
});
