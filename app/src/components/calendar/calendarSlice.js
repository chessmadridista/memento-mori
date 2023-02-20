import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        noOfWeeksInCurrentYear: 0,
        noOfYearsSinceBirth: 0,
        ageAtDeath: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
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