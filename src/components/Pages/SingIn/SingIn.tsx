import { useDispatch, useSelector } from "react-redux";
import UserList from "../../Molecules/UserList";
import LoginForm, { LoginType } from "../../Organisms/LoginForm";
import { User, login } from "../../../plugins/store/slices/userSlice";
import { getUser } from "../../../plugins/store/reducers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./SignIn.module.scss";

export default function SingIn() {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const navigate = useNavigate();

    const handleSubmit = (frm: LoginType) => {
        dispatch(login(frm) as any);
    }

    const handleClick = (user: User) => {
        handleSubmit({ username: user.id, password: user.password });
    }

    useEffect(() => {
        if (!Object.keys(user).length) {
            return;
        }

        navigate('/', { replace: true });
    }, [user, navigate]);

    return (
        <div className={css['signin-page']}>
            <div className={css['head']}>employee poll</div>
            <div className={css['wrapper']}>
                <LoginForm submit={handleSubmit} />
                <UserList click={handleClick} />
            </div>
        </div>
    );
}
