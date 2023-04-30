import { createSlice } from "@reduxjs/toolkit";

export const callSchedulingSlice = createSlice({
    name: 'callScheduling',
    initialState: {
        scheduledCalls: [],
    },
    reducers: {
        addScheduledCall: (state, action) => {
            state.scheduledCalls.push(action.payload)
            console.log(state.scheduledCalls)
        }
    }
});

export const { addScheduledCall } = callSchedulingSlice.actions;

export default callSchedulingSlice.reducer;