import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogout, setUser } from "./userSlice";
import { checkAuthToken } from "../lib/checkAuthToken";
import Axios from "../lib/Axios";

export const authLogout = createAsyncThunk('auth/authLogout', async (_, thunkAPI) => {
    localStorage.removeItem('jwtToken')
    thunkAPI.dispatch(userLogout())
})
//createAsyncThunk is a function that takes in a string and a function. The string is the name of the thunk, and the function is the payload creator. The payload creator is a function that returns a promise containing some data, or an error. The payload creator function takes in two arguments: the first argument is the payload, and the second argument is the thunkAPI object. The thunkAPI object contains the dispatch and getState functions, which can be used to dispatch actions and get the current state of the store, respectively. The thunkAPI object also contains a rejectWithValue function, which can be used to reject the promise with a value. The rejectWithValue function takes in a value as an argument, and returns a rejected promise with that value as the payload. The thunkAPI object also contains a dispatch function, which can be used to dispatch actions. The dispatch function takes in an action as an argument, and returns the action as a fulfilled promise.
export const authCheck = createAsyncThunk('auth/authCheck', async (_, thunkAPI) => {
    try {
        checkAuthToken()
        const response = await Axios.post('/users/authtoken')

        //thunkAPI to set User
        thunkAPI.dispatch(setUser(response.data))
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
}) 

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        authSuccess: (state) => {
            state.isAuth = true
        },
        authFailure: (state) => {
            state.isAuth = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(authLogout.fulfilled, (state) => {
                state.isAuth = false
            })
            .addCase(authCheck.fulfilled, (state) => {
                state.isAuth = true
            })
            .addCase(authCheck.rejected, (state, action) => {
                state.isAuth = false
                console.log(action.payload);
            })
        }
})

export const {authSuccess, authFailure} = authSlice.actions

export default authSlice.reducer