import "./Poll.scss";

export type PollType = {
    id: string;
    title: string;
    timestamp: number;
    onView: (id: string) => void
}
export default function Poll({ id, title, timestamp, onView }: PollType) {
    const timeDisplay: string = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(new Date(timestamp));

    return (
        <li className="poll">
            <h3>{title}</h3>
            <h6>{timeDisplay}</h6>
            <button type="button" onClick={e => onView(id)}>Show</button>
        </li>
    );
}