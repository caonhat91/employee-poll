import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _login } from '../../api/_DATA';

export type UserType = {
    id: string,
    password: string,
    name: string,
    avatarURL: string | null,
    answers: {
        [key: string]: string,
    },
    questions: string[]
}

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserType,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(logout.fulfilled, (state, action) => {
                if (action.payload) {
                    return {} as UserType;
                }
            })
    },
});;

export const login = createAsyncThunk<UserType, { username: string, password: string }>(
    'user/login',
    async ({ username, password }) => {
        const user = await _login(username, password);
        return user;
    }
);

export const logout = createAsyncThunk<boolean, void>(
    'user/logout',
    async () => await new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
    })
);

export default userSlice.reducer;