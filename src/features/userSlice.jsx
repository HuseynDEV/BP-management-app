import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'


export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
    const response = await fetch('https://ragged-yak-production.up.railway.app/api/v1/workers')
    return response.json()
})
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        users: null,
        error: false,
        userID: null || localStorage.getItem('userId'),
        foreman:null || localStorage.getItem('foreman')
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        addUserID: (state, action) => {
            state.userID = action.payload
        },
        addForeman:(state, action)=>{
            state.foreman=action.payload
        },
        logoutForeman:(state)=>{
            state.foreman=false
            localStorage.removeItem('foreman')
        },
        logoutUser:(state)=>{
            state.userID=null
            localStorage.removeItem('userId')

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.error = true
        })
    }

})

export const { increment, addUserID,addForeman,logoutForeman, logoutUser } = userSlice.actions
export default userSlice.reducer