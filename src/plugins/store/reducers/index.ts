import { combineReducers } from 'redux';
import usersSlice from '../slices/usersSlice';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
    users: usersSlice,
    user: userSlice,
});

export type StateType = ReturnType<typeof rootReducer>;

export const getUsersState = (state: StateType) => state.users;

export const getUserState = (state: StateType) => {
    console.trace();
    return state.user;
};

export default rootReducer;
