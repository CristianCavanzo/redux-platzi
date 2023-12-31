import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loader: false,
};
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload;
        },
    },
});

export const { setLoader } = uiSlice.actions;
export default uiSlice.reducer;
