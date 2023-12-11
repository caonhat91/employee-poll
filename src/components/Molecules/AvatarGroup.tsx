import { UserType } from "../../plugins/store/slices/userSlice";
import Avatar from "../Atoms/Avatar";
import "./AvatarGroup.scss"

export default function AvatarGroup(user: UserType) {
    return (
        <div className="avatar-group">
            <Avatar img={user.avatarURL} alt={user.name} />
            <h4>{user.name}</h4>
        </div>
    );
}