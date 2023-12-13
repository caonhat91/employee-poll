import { FormEvent, useState } from "react";
import Button from "../Atoms/Button";
import "./LoginForm.scss";

export type LoginType = {
    username: string,
    password: string
};

export default function LoginForm({ submit, error }: { submit: (_: LoginType) => void, error?: string }) {

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
        <div className="login-page">
            <h1 className="h1">Login</h1>
            {error && <small className="error">{error}</small>}
            <form className="form" noValidate autoComplete="false" onSubmit={handleSubmit}>
                <div className="control">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" className={errors?.username && "invalid"} required
                        value={frm.username} onChange={e => changeFrm(e.target.name, e.target.value)} onFocus={validateForm} onBlur={validateForm} />
                    {errors?.username && <small className="error">{errors.username}</small>}
                </div>
                <div className="control">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" className={errors?.password && "invalid"} required
                        value={frm.password} onChange={e => changeFrm(e.target.name, e.target.value)} onFocus={validateForm} onBlur={validateForm} />
                    {errors?.password && <small className="error">{errors.password}</small>}
                </div>
                <Button>
                    <button type="submit">Submit</button>
                </Button>
            </form>
        </div>
    );
}