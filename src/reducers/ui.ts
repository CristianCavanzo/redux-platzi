import { PokemonActions, UIActions } from 'actions/constants';

const initialState = {
    loading: false,
};

export const UIReducer = (state = initialState, action) => {
    switch (action.type) {
        case UIActions.SET_lOADER:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
};
