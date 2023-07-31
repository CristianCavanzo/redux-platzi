export const logger = (store) => (next) => (action) => {
    console.log(store);
    next(action);
};

export const feeaturing = (store) => (next) => (action) => {
    const feautred = [{ name: 'eddie' }, ...action.payload];
    feautred.map((pokemon) => (pokemon.id = crypto.randomUUID()));
    const updatedAction = {
        type: action.type,
        payload: feautred,
    };
    console.log(action);

    next(updatedAction);
};
