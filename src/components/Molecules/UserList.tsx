import { useSelector } from "react-redux";
import { getUsersState } from "../../plugins/store/reducers";
import { UserType } from "../../plugins/store/slices/userSlice";
import "./UserList.scss";
import Avatar from "../Atoms/Avatar";

export default function UserList({ click }: { click: (user: UserType) => void }) {
    const users = useSelector(getUsersState);
    const userList = Object.keys(users).map(userCode => {
        const user = users[userCode];
        return <li className="user-item" key={user.id} onClick={() => click(user)}>
            <span className="tooltip">{user.name}</span>
            <Avatar img={user.avatarURL} alt={user.name} />
        </li>
    })

    return (<ul className="user-list">{userList}</ul>);
}