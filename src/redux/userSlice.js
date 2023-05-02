import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from '../lib/Axios'
import { authSuccess } from "./authSlice"

export const fetchUser = createAsyncThunk('user/fetchUser', async (userData, thunkAPI) => {

    try {
        let response = await Axios.post('/users/login', userData)
    
        // remember me button checked
        // isRemember && localStorage.setItem('jwtToken', response.data.token)
    
        localStorage.setItem('jwtToken', response.data.token)
        
        //dispact authSlice - authSuccess
        thunkAPI.dispatch(authSuccess())
    
        return  {
            user: response.data.userObj
        }
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const registerUser = createAsyncThunk('user/registerUser', async userData => {
    let response = await Axios.post('/users/register', userData)
    return {
        user: response.data.userObj
    }
})

const initialState = {
    username: '',
    email: '',
    password: '',
    status: null,
    message: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    // syncronous set state
    reducers: {
        userLogout: (state) => {
            return initialState
        },
        setUser: (state, action) => {
            state.username = action.payload.username
            state.email = action.payload.email 
        }
    },
    // asyncronous set state
    extraReducers: builder => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => { //step four
                state.username = action.payload.user.username
                state.email = action.payload.user.email
                state.status = 'fulfilled'
                state.message = ''
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'rejected'
                state.message = action.payload.message
                
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state = action.payload.user
            })

    }
})

export const {userLogout, setUser} = userSlice.actions

export default userSlice.reducer