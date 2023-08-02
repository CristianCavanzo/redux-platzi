import { combineReducers } from 'redux';
import pokemonSlice from 'slices/pokemonSlice';
import uiSlice from 'slices/uiSlice';

export const rootReducer = combineReducers({
    data: pokemonSlice,
    ui: uiSlice,
});
