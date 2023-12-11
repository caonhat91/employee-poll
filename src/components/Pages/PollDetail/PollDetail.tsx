import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions, getUser, getUsers } from "../../../plugins/store/reducers";
import { useEffect, useState } from "react";
import { Question, answerQuestion } from "../../../plugins/store/slices/questionsSlice";
import { User } from "../../../plugins/store/slices/userSlice";
import Avatar from "../../Atoms/Avatar";
import "./PollDetail.scss";
import QuestionDetail from "../../Organisms/QuestionDetail";

export default function PollDetail() {
    const param = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const users = useSelector(getUsers);
    const questions = useSelector(getQuestions);

    const [isAnswer, setIsAnswer] = useState<boolean>(false);

    const [question, setQuestion] = useState<Question | undefined>();

    const [creator, setCreator] = useState<User | undefined>();

    useEffect(() => {
        const id: string = param["question_id"] ?? '';
        const answers = user.answers[id];
        setIsAnswer(typeof answers === 'string');
        const question = questions[id];
        setQuestion(question);
        const userCreator = users[question.author];
        setCreator(userCreator);
    }, [param, user, questions, users]);

    function handleChooseOption(answer: string) {
        if (!question) {
            return;
        }
        dispatch(answerQuestion({
            authedUser: user.id,
            qid: question.id,
            answer
        }) as any);
        navigate("/");
    }

    return (
        <div className="poll-detail-page">
            {creator && <div className="poll-author">
                <h2>Poll by {creator.name}</h2>
                <Avatar img={creator.avatarURL} alt={creator.name} size="128px" />
            </div>}
            {question &&
                <QuestionDetail question={question} isAnswer={isAnswer}
                    totalUser={Object.keys(users).length}
                    onChoose={handleChooseOption} />
            }
        </div>
    );
}