import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
    const response = await axios.get('https://ragged-yak-production.up.railway.app/api/v1/workers')
    return response
})
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
               state.isLoading=false;
               state.data=action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                console.log(state)
            })
    }

})

export const { increment } = userSlice.actions
export default userSlice.reducer