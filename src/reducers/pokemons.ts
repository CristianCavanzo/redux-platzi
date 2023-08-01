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
        case PokemonActions.SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const indexPokemon = newPokemonList.findIndex(
                (pokemon) => pokemon.id === action.payload
            );
            if (indexPokemon < 0) {
                return {
                    ...state,
                };
            }

            newPokemonList[indexPokemon].favorite =
                !newPokemonList[indexPokemon].favorite;
            console.log(newPokemonList);

            return {
                ...state,
                pokemons: newPokemonList,
            };
        default:
            return state;
    }
};
