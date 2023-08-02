import { UIActions } from './constants';

export const setLoading = (payload: boolean) => ({
    type: UIActions.SET_lOADER,
    payload,
});
