import { FormEvent, useState } from "react";
import Button from "../Atoms/Button";
import css from "./LoginForm.module.scss"

export type LoginType = {
    username: string,
    password: string
};

export default function LoginForm({ submit }: { submit: (_: LoginType) => void }) {

    const [frm, setFrm] = useState<LoginType>({
        username: '',
        password: ''
    });

    const changeFrm = (name: string, val: string) => {
        if (!name) {
            return;
        }
        setFrm({ ...frm, [name]: val });
    }

    const [errors, setErrors] = useState<LoginType | null>(null);

    const validateForm = () => {
        let newErrors: any = {};

        if (frm.username.trim() === '') {
            newErrors = { username: 'Username is required' };
        }

        if (frm.password.trim() === '') {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.values(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        submit(frm);
    }

    return (
        <div className={css['login-page']}>
            <h1 className={css['h1']}>Login</h1>
            <form className={css['form']} noValidate autoComplete="false" onSubmit={handleSubmit}>
                <div className={css['control']}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" className={errors?.username && css['invalid']} required
                        value={frm.username} onChange={e => changeFrm(e.target.name, e.target.value)} onFocus={validateForm} onBlur={validateForm} />
                    {errors?.username && <small className={css['error']}>{errors.username}</small>}
                </div>
                <div className={css['control']}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" className={errors?.password && css['invalid']} required
                        value={frm.password} onChange={e => changeFrm(e.target.name, e.target.value)} onFocus={validateForm} onBlur={validateForm} />
                    {errors?.password && <small className={css['error']}>{errors.password}</small>}
                </div>
                <Button>
                    <button type="submit">Submit</button>
                </Button>
            </form>
        </div>
    );
}