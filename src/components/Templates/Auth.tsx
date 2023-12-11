import { ReactElement, ReactNode } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../plugins/store/reducers";
import { Navigate } from "react-router-dom";

export default function Auth({ children }: { children: ReactNode | ReactElement }) {
    const user = useSelector(getUser);

    if (!Object.keys(user).length) {
        return <Navigate to="/login" replace={true} />;
    }

    return <>{children}</>;
}