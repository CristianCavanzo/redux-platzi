import { PokemonActions } from 'actions/constants';

const initialState = {
    pokemons: [],
    loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PokemonActions.SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            };
        case PokemonActions.ACTIVE_LOADER:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};
