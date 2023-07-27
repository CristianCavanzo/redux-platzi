import { PokemonActions } from 'actions/constants';

const initialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PokemonActions.SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            };
        default:
            return state;
    }
};
