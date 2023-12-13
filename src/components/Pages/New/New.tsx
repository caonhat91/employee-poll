import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUser } from "../../../plugins/store";
import { NewQuestion, createQuestion } from "../../../plugins/store/slices/questionsSlice";
import { useNavigate } from "react-router-dom";
import "./New.scss";

export default function New() {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector(getUser);
    const title = "Would you rather";

    const [frm, setFrm] = useState<NewQuestion>({
        title,
        author: '',
        optionOneText: '',
        optionTwoText: ''
    });

    const changeFrm = (name: string, val: string) => {
        if (!name) {
            return;
        }
        setFrm({ ...frm, [name]: val });
    }

    const [errors, setErrors] = useState<NewQuestion | null>(null);

    const validateForm = () => {
        let newErrors: any = {};

        if (frm.optionOneText.trim() === '') {
            newErrors.optionOneText = 'Option One is required';
        }

        if (frm.optionTwoText.trim() === '') {
            newErrors.optionTwoText = 'Option Two is required';
        }

        setErrors(newErrors);
        return Object.values(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        frm.author = user.id;
        dispatch(createQuestion(frm) as any);
        navigate("/");
    }

    return (
        <div className="new-page">
            <h2>{title}</h2>
            <h3>Create your own poll</h3>
            <form className="form" noValidate autoComplete="false" onSubmit={handleSubmit}>
                <div className="control">
                    <label htmlFor="optionOneText">Option One:</label>
                    <input type="text" name="optionOneText" id="optionOneText" className={errors?.optionOneText && "invalid"} required
                        value={frm.optionOneText} onChange={e => changeFrm(e.target.name, e.target.value)} onFocus={validateForm} onBlur={validateForm} />
                    {errors?.optionOneText && <small className="error">{errors.optionOneText}</small>}
                </div>
                <div className="control">
                    <label htmlFor="optionTwoText">Option Two:</label>
                    <input type="optionTwoText" name="optionTwoText" id="optionTwoText" className={errors?.optionTwoText && "invalid"} required
                        value={frm.optionTwoText} onChange={e => changeFrm(e.target.name, e.target.value)} onFocus={validateForm} onBlur={validateForm} />
                    {errors?.optionTwoText && <small className="error">{errors.optionTwoText}</small>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}