import { Outlet } from "react-router-dom";
import Navigator from "../Organisms/Navigator";
import "./Layout.scss"

export default function Layout() {
    return (
        <>
            <div className="layout--bg"></div>
            <main className="layout">
                <Navigator />
                <Outlet />
            </main>
        </>
    );
}