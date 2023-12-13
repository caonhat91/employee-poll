import { Question } from "../../plugins/store/slices/questionsSlice";
import "./QuestionDetail.scss";

type QuestionDetailOptions = {
    question: Question;
    isAnswer: boolean;
    totalUser: number;
    onChoose: (answer: string) => void;
};

export default function QuestionDetail(
    { question, isAnswer, totalUser, onChoose }: QuestionDetailOptions
) {

    const unanswered = (key: string) => (
        <>
            <h4>Click</h4>
            <a href="#!" onClick={() => onChoose(key)}><span></span></a>
        </>
    );

    const answered = (votes: string[]) => {
        const percent = votes.length * 100 / totalUser;
        return (
            <>
                <div className="person-vote">
                    <div className="img-icon">
                        <img src="../vote-person.png" alt="votes" />
                    </div>
                    <h4>{votes.length} / {totalUser} voted</h4>
                </div>
                <div className="sperator"></div>
                <div className="progress-wrapper">
                    <div className="progress" style={{ width: `${percent}%` }}></div>
                    <span>{percent}%</span>
                </div>
            </>
        );
    };

    const optionRender = ({ votes, text, key }: { votes: string[], text: string, key: string }) => {
        return (
            <div className="option">
                <p className="text">{text}</p>
                <div className="sperator"></div>
                {isAnswer ? answered(votes) : unanswered(key)}
            </div>
        );
    }

    return (
        <div className="question">
            <h2>{question.title}</h2>
            <div className="option-group">
                {optionRender({ ...question.optionOne, key: "optionOne" })}
                {optionRender({ ...question.optionTwo, key: "optionTwo" })}
            </div>
        </div>
    );
}