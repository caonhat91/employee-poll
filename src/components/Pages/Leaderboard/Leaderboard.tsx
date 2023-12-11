import { useSelector } from "react-redux";
import Table from "../../Molecules/Table";
import "./Leaderboard.scss"
import { getUsers } from "../../../plugins/store/reducers";
import AvatarGroup from "../../Molecules/AvatarGroup";

export default function Leaderboard() {
    const users = useSelector(getUsers);

    const thead = <tr>
        <th>Users</th>
        <th>Answered</th>
        <th>Created</th>
    </tr>;

    const tbody = Object.values(users)
        .sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length)
        .map(user => {
            return <tr key={user.id}>
                <td><AvatarGroup {...user} /></td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
            </tr>;
        });

    return (
        <div className="leaderboard-page">
            <Table thead={thead} tbody={tbody} />
        </div>
    );
}