import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, getQuestions, getUser, getUsers } from "../../../plugins/store";
import { useEffect, useState } from "react";
import { Question, answerQuestion } from "../../../plugins/store/slices/questionsSlice";
import { User } from "../../../plugins/store/slices/userSlice";
import QuestionDetail from "../../Organisms/QuestionDetail";
import Avatar from "../../Atoms/Avatar";
import "./PollDetail.scss";

export default function PollDetail() {
    const param = useParams();
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector(getUser);
    const users = useSelector(getUsers);
    const questions = useSelector(getQuestions);

    const [isAnswer, setIsAnswer] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
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
        if (!question || disabled === true) {
            return;
        }
        setDisabled(!disabled);
        dispatch(answerQuestion({
            authedUser: user.id,
            qid: question.id,
            answer
        })).then(() => {
            setDisabled(!disabled);
            navigate("/");
        });
    }

    return (
        <div className="poll-detail-page" style={disabled ? { pointerEvents: "none" } : {}}>
            {creator && <div className="poll-author">
                <h2>Poll by {creator.name}</h2>
                <Avatar img={creator.avatarURL} alt={creator.name} size="128px" />
            </div>}
            {question &&
                <QuestionDetail question={question} isAnswer={isAnswer} userId={user.id}
                    totalUser={Object.keys(users).length}
                    onChoose={handleChooseOption} />
            }
        </div>
    );
}