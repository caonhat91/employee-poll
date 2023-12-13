import { useDispatch } from "react-redux";
import UserList from "../../Molecules/UserList";
import LoginForm, { LoginType } from "../../Organisms/LoginForm";
import { login } from "../../../plugins/store/slices/userSlice";
import { AppDispatch } from "../../../plugins/store";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../../plugins/store/slices/questionsSlice";
import css from "./SignIn.module.scss";
import { useState } from "react";

export default function SingIn() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState<string>();

    const handleSubmit = (frm: LoginType) => {
        dispatch(login(frm)).then((res) => {
            switch (res.meta.requestStatus) {
                case "fulfilled":
                    dispatch(fetchQuestions());
                    navigate('/', { replace: true });
                    break;
                case "rejected":
                    const { error: { message } } = res as any;
                    setError(message ?? '');
                    break;
            }
        });
    }

    return (
        <div className={css['signin-page']}>
            <div className={css['head']}>employee poll</div>
            <div className={css['wrapper']}>
                <LoginForm submit={handleSubmit} error={error} />
                <UserList click={(user) => handleSubmit({ username: user.id, password: user.password })} />
            </div>
        </div>
    );
}
