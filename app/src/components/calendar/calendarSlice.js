import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        value: 0,
        noOfWeeksInCurrentYear: 0,
        noOfYearsSinceBirth: 0,
        ageAtDeath: 0,
    },
    reducers: {
        setNoOfWeeks: (state, action) => {
            state.noOfWeeksInCurrentYear = action.payload;
        },
        setNoOfYears: (state, action) => {
            state.noOfYearsSinceBirth = action.payload;
        },
        setAgeAtDeath: (state, action) => {
            state.ageAtDeath = action.payload;
        }
    },
});

export const { increment, decrement, incrementByAmount, setNoOfWeeks, setNoOfYears, setAgeAtDeath } = calendarSlice.actions;
export default calendarSlice.reducer;