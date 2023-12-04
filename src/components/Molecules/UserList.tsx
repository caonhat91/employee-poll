import { useSelector } from "react-redux";
import { getUsersState } from "../../plugins/store/reducers";
import { UserType } from "../../plugins/store/slices/userSlice";

export default function UserList({ click }: { click: (user: UserType) => void }) {
    const users = useSelector(getUsersState);
    const userList = Object.keys(users).map(userCode => {
        const user = users[userCode];
        return <li key={user.id} onClick={() => click(user)}>{user.name}</li>
    })

    return (<ul>{userList}</ul>);
}