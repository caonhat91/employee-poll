var { _saveQuestion, _saveQuestionAnswer } = require('../plugins/api/_DATA');

describe('saveQuestion', () => {
    test('will return the new question', async () => {
        let data = {
            optionOneText: 'Build new app with Vite',
            optionTwoText: "Build new app with Bun",
            author: 'sarahedo'
        };
        let result = await _saveQuestion(data);
        expect(result.id).not.toBeUndefined();
        expect(typeof result.timestamp).toBe('number');
        expect(result.title).toEqual('Would You Rather');
        expect(result.author).toEqual('sarahedo');
        expect(result.optionOne).toBeDefined();
        expect(result.optionOne).toStrictEqual({ votes: [], text: data.optionOneText });
        expect(result.optionTwo).toStrictEqual({ votes: [], text: data.optionTwoText });
    });

    test('will return error', async () => {
        let data = {
            optionOneText: 'Build new app with Vite',
            optionTwoText: "Build new app with Bun"
        };
        await expect(_saveQuestion(data)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

});

describe('saveQuestionAnswer', () => {
    it('will return the answer of question', async () => {
        let data = {
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        };
        let result = await _saveQuestionAnswer(data);
        expect(result).toBeTruthy();
    });

    test('will return error', async () => {
        let data = {
            authedUser: "tylermcginnis",
            qid: "8xf0y6ziyjabvozdd253nd"
        };
        await expect(_saveQuestionAnswer(data)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});
