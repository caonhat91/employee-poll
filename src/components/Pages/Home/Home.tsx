import PollShell from "../../Templates/PollShelf";
import { useSelector } from "react-redux";
import { getQuestions, getUser } from "../../../plugins/store";
import { useNavigate } from "react-router-dom";
import "./Home.scss"

export default function Home() {
    const navigate = useNavigate();
    const questions = useSelector(getQuestions);
    const user = useSelector(getUser);

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