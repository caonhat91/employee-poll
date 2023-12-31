import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _login } from '../../api/_DATA';

export type User = {
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
    initialState: {} as User,
    reducers: {
        saveAnswers(state, action) {
            state.answers = { ...state.answers, ...action.payload };
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(logout.fulfilled, (state, action) => {
                if (action.payload) {
                    return {} as User;
                }
            })
    },
});;

export const login = createAsyncThunk<User, { username: string, password: string }>(
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

export const { saveAnswers } = userSlice.actions;

export default userSlice.reducer;