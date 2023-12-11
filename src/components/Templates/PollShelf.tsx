import { Question } from "../../plugins/store/slices/questionsSlice";
import Poll from "../Molecules/Poll";
import "./PollShelf.scss"

export type PollShellType = {
    headline: string;
    polls: Question[];
    onView: (id: string) => void;
}

export default function PollShell({ headline, polls, onView }: PollShellType) {

    const pollList = polls
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(poll => <Poll key={poll.id} {...poll} onView={onView} />);

    return (
        <section className="poll-shelf">
            <div className="poll-headline">
                <h2>{headline}</h2>
            </div>
            <div className="poll-grid-wrapper">
                <ul className="poll-grid">{pollList}</ul>
            </div>
        </section>
    );
}