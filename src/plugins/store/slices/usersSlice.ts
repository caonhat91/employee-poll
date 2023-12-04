import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getUsers } from '../../api/_DATA';
import { UserType } from './userSlice';

export type UsersType = {
    [key: string]: UserType
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {} as UsersType,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    },
});;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const users = await _getUsers();
    return users;
});

export default usersSlice.reducer;