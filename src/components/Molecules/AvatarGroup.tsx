import { User } from "../../plugins/store/slices/userSlice";
import Avatar from "../Atoms/Avatar";
import "./AvatarGroup.scss"

export default function AvatarGroup(user: User) {
    return (
        <div className="avatar-group">
            <Avatar img={user.avatarURL} alt={user.name} />
            <h4>{user.name}</h4>
        </div>
    );
}