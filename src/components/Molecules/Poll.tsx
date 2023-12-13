import { formatDate } from "../../utils/date.format";
import "./Poll.scss";

export type PollType = {
    id: string;
    title: string;
    timestamp: number;
    onView: (id: string) => void
}
export default function Poll({ id, title, timestamp, onView }: PollType) {
    const timeDisplay: string = formatDate(timestamp);

    return (
        <li className="poll">
            <h3>{title}</h3>
            <h6>{timeDisplay}</h6>
            <button type="button" onClick={e => onView(id)}>Show</button>
        </li>
    );
}