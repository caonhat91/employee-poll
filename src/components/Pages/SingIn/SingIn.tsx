import { useDispatch } from "react-redux";
import UserList from "../../Molecules/UserList";
import LoginForm, { LoginType } from "../../Organisms/LoginForm";
import { User, login } from "../../../plugins/store/slices/userSlice";
import { AppDispatch } from "../../../plugins/store";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../../plugins/store/slices/questionsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import css from "./SignIn.module.scss";

export default function SingIn() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (frm: LoginType) => {
        dispatch(login(frm)).then((res): asserts res is PayloadAction<User, string, {
            arg: {
                username: string;
                password: string;
            };
            requestId: string;
            requestStatus: "fulfilled";
        }, never> => {
            dispatch(fetchQuestions());
            navigate('/', { replace: true });
        });
    }

    return (
        <div className={css['signin-page']}>
            <div className={css['head']}>employee poll</div>
            <div className={css['wrapper']}>
                <LoginForm submit={handleSubmit} />
                <UserList click={(user) => handleSubmit({ username: user.id, password: user.password })} />
            </div>
        </div>
    );
}
