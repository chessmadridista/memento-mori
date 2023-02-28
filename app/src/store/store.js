import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../components/calendar/calendarSlice';
import auxiliaryReducer from '../components/auxialiary/auxiliarySlice';

export default configureStore({
    reducer: {
        calendar: calendarReducer,
        auxiliary: auxiliaryReducer,
    },
});