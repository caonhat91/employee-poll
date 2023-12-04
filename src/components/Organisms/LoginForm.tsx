import { FormEvent, useState } from "react";

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
        <form noValidate autoComplete="false" onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username:
                <input type="text" name="username" id="username"
                    value={frm.username}
                    onChange={e => changeFrm(e.target.name, e.target.value)} />
            </label>
            {errors?.username && <p>{errors.username}</p>}
            <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password"
                    value={frm.password}
                    onChange={e => changeFrm(e.target.name, e.target.value)} />
            </label>
            {errors?.password && <p>{errors.password}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}