import { combineReducers } from 'redux';
import usersSlice from '../slices/usersSlice';
import userSlice from '../slices/userSlice';
import questionsSlice from '../slices/questionsSlice';

const rootReducer = combineReducers({
    users: usersSlice,
    user: userSlice,
    questions: questionsSlice
});

export type StateType = ReturnType<typeof rootReducer>;

export const getUsers = (state: StateType) => state.users;

export const getUsersLength = (state: StateType) => Object.keys(state.users).length;

export const getUser = (state: StateType) => state.user;

export const getQuestions = (state: StateType) => state.questions;

export default rootReducer;
