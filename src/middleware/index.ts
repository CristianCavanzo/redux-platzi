export const logger = (store) => (next) => (action) => {
    next(action);
};

export const feeaturing = (store) => (next) => (action) => {
    const feautred = [{ name: 'eddie' }, ...action.payload];
    feautred.map((pokemon) => (pokemon.id = crypto.randomUUID()));
    const updatedAction = {
        type: action.type,
        payload: feautred,
    };

    next(updatedAction);
};
