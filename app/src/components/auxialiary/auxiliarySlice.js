import { createSlice } from '@reduxjs/toolkit';

export const auxiliarySlice = createSlice({
    name: 'auxiliary',
    initialState: {
        spinner: false,
        notification: false,
    },
    reducers: {
        showSpinner: (state) => {
            state.spinner = true;
        },
        hideSpinner: (state) => {
            state.spinner = false;
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