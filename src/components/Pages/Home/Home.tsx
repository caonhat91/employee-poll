import PollShell from "../../Templates/PollShelf";
import { useSelector } from "react-redux";
import { getQuestions, getUser } from "../../../plugins/store";
import { useNavigate } from "react-router-dom";
import "./Home.scss"
import { useState } from "react";

export default function Home() {
    const navigate = useNavigate();
    const questions = useSelector(getQuestions);
    const user = useSelector(getUser);
    const [viewMode, setViewMode] = useState<"answered" | "unanswered">("unanswered");

    const answered = Object.keys(questions).filter(question => Object.keys(user.answers).includes(question))
        .map(id => questions[id]);
    const unanswered = Object.keys(questions).filter(question => !Object.keys(user.answers).includes(question))
        .map(id => questions[id]);

    function handleView(id: string): void {
        navigate(`/questions/${id}`);
    }

    function handleChangeViewMode(): void {
        setViewMode(viewMode === "answered" ? "unanswered" : "answered");
    }

    return (
        <div className="home-page">
            <button type="button" className="switch-mode" onClick={handleChangeViewMode}>{viewMode === "answered" ? "Unanswered" : "Answered"}</button>
            {viewMode === "unanswered" &&
                <PollShell headline="Poll Unanswered" polls={unanswered} onView={handleView} />}
            {viewMode === "answered" &&
                <PollShell headline="Poll Answered" polls={answered} onView={handleView} />}
        </div>
    );
}