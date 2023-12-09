import { ReactElement, ReactNode } from "react";
import "./Button.scss";

export default function Button({ children }: { children: ReactNode | ReactElement }) {
    return (<>{children}</>)
}