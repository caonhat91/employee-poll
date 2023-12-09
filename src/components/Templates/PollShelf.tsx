import Poll, { PollType } from "../Molecules/Poll";

export type PollShellType = {
    headline: string;
    polls: PollType[];
}

export default function PollShell({ headline, polls }: PollShellType) {

    const pollList = polls.map(poll => <Poll {...poll} onView={handleView} />);

    function handleView(id: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <section className="poll-shelf">
            <div className="poll-headline">
                <h2>{headline}</h2>
            </div>
            <div className="poll-grid">
                <ul>{pollList}</ul>
            </div>
        </section>
    );
}