import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

fetch('https://callous-knot-production.up.railway.app/api/v1/workers')
    .then(response => response.json())
    .then(commits => users = commits);


export const userList = createSlice({
    name: "users",
    initialState,
    reducers: {

    }

})


export default userList.reducer