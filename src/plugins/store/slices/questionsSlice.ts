import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../../api/_DATA';
import { fetchUsers } from './usersSlice';

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

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
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
    return function (dispatch: any) {
        _saveQuestionAnswer(answerQuestion).then(() => {
            dispatch(fetchQuestions());
            dispatch(fetchUsers());
        });
    }
}

export default questionsSlice.reducer;