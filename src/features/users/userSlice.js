import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    user: [],
    error: ""
}

// define async functions and generating lifecycle methods(pending, fulfilled, rejected)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/users");
    return responce.data.map((user) => user);
});

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        // define three cases => (pending, fulfilled, rejected)
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload,
            state.error = ""
        });
        builder.addCase(fetchUsers.rejected, (state, action)=> {
            state.loading = false,
            state.user = [],
            state.error = action.error.message
        });
    }
});
export default userSlice.reducer;