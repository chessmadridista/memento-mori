import { createSlice } from '@reduxjs/toolkit';

export const auxiliarySlice = createSlice({
    name: 'auxiliary',
    initialState: {
        loading: false,
        notification: false,
    },
    reducers: {
        showSpinner: (state) => {
            state.loading = true;
        },
        hideSpinner: (state) => {
            state.loading = false;
        },
        showNotification: (state) => {
            state.notification = true;
        },
        hideNotification: (state) => {
            state.notification = false;
        },
    },
});

export const { showSpinner, hideSpinner, showNotification, hideNotification } = auxiliarySlice.actions;
export default auxiliarySlice.reducer;