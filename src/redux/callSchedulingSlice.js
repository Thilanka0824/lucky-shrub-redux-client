import { createSlice } from "@reduxjs/toolkit";

export const callSchedulingSlice = createSlice({
    name: 'callScheduling',
    initialState: {
        scheduledCalls: [],
    },
    reducers: {
        addScheduledCall: (state, action) => {
            state.scheduledCalls.push(action.payload)
        }
    }
});

export const { addScheduledCall } = callSchedulingSlice.actions;

export default callSchedulingSlice.reducer;