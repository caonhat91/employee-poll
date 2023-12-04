import { useDispatch, useSelector } from "react-redux";
import UserList from "../../Molecules/UserList";
import LoginForm, { LoginType } from "../../Organisms/LoginForm";
import { UserType, login } from "../../../plugins/store/slices/userSlice";
import { getUserState } from "../../../plugins/store/reducers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SingIn() {
    const dispatch = useDispatch();
    const user = useSelector(getUserState);
    const navigate = useNavigate();

    const handleSubmit = (frm: LoginType) => {
        dispatch(login(frm) as any);
    }

    const handleClick = (user: UserType) => {
        handleSubmit({ username: user.id, password: user.password });
    }

    useEffect(() => {
        if (!Object.keys(user).length) {
            return;
        }

        navigate('/', { replace: true });
    }, [user, navigate]);

    return (
        <>
            <LoginForm submit={handleSubmit} />
            <UserList click={handleClick} />
        </>
    );
}
