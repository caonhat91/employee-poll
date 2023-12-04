import { useDispatch } from "react-redux";
import { logout } from "../../plugins/store/slices/userSlice";

export default function Navigator() {
    const dispatch = useDispatch();
    return (
        <>
            <button type="button" onClick={() => dispatch(logout() as any)}>Logout</button>
        </>
    );
}