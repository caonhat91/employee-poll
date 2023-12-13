import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../../api/_DATA';
import { Users, fetchUsers } from './usersSlice';
import { AppDispatch, RootState } from '..';
import { saveAnswers } from './userSlice';

export type Question = {
    id: string,
    timestamp: number,
    author: string,
    title: string,
    optionOne: {
        votes: string[],
        text: string,
    },
    optionTwo: {
        votes: string[],
        text: string,
    }
}

export type Questions = {
    [key: string]: Question
}

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {} as Questions,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            return action.payload;
        })
    },
});;

export const fetchQuestions = createAsyncThunk<Questions, void, {}>('questions/fetchQuestions', async () => {
    return await _getQuestions();
});

export type NewQuestion = {
    author: string,
    title?: string,
    optionOneText: string,
    optionTwoText: string,
}

export type AnswerQuestion = {
    authedUser: string;
    qid: string;
    answer: string;
}

export function createQuestion(newQuestion: NewQuestion) {
    return function (dispatch: any) {
        _saveQuestion(newQuestion).then(() => {
            dispatch(fetchQuestions());
            dispatch(fetchUsers());
        });
    }
}

export function answerQuestion(answerQuestion: AnswerQuestion) {
    return async function (dispatch: AppDispatch, getState: () => RootState) {
        await _saveQuestionAnswer(answerQuestion);
        dispatch(fetchQuestions());
        return dispatch(fetchUsers()).then((res): asserts res is PayloadAction<Users, string, {
            arg: void;
            requestId: string;
            requestStatus: "fulfilled";
        }, never> => {
            if (res.meta.requestStatus !== 'fulfilled') {
                return;
            }
            const newUser = (res.payload as Users)[getState().user.id];
            dispatch(saveAnswers(newUser.answers));
        });
    }
}

export default questionsSlice.reducer;