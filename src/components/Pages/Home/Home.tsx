import { useEffect } from "react";
import PollShell from "../../Templates/PollShelf";
import { fetchQuestions } from "../../../plugins/store/slices/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, getUser } from "../../../plugins/store/reducers";
import "./Home.scss"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const questions = useSelector(getQuestions);
    const user = useSelector(getUser);

    useEffect(() => {
        dispatch(fetchQuestions() as any);
    }, [dispatch]);

    const answered = Object.keys(questions).filter(question => Object.keys(user.answers).includes(question))
        .map(id => questions[id]);
    const unanswered = Object.keys(questions).filter(question => !Object.keys(user.answers).includes(question))
        .map(id => questions[id]);

    function handleView(id: string): void {
        navigate(`/questions/${id}`);
    }

    return (
        <>
            <PollShell headline="Poll Unanswered" polls={unanswered} onView={handleView} />
            <PollShell headline="Poll Answered" polls={answered} onView={handleView} />
        </>
    );
}