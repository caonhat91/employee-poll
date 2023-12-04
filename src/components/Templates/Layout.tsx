import { Outlet } from "react-router-dom";
import Navigator from "../Organisms/Navigator";

export default function Layout() {
    return (
        <>
            <Navigator />
            <Outlet />
        </>
    );
}