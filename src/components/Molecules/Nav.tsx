import { Link, useLocation } from "react-router-dom";
import "./Nav.scss"
import { useState } from "react";

export default function Nav({ className }: { className: string }) {
    const location = useLocation();
    const [menus] = useState<{ to: string, text: string }[]>([
        {
            to: "/",
            text: "Home"
        },
        {
            to: "/leaderboard",
            text: "Leaderboard"
        },
        {
            to: "/new",
            text: "New"
        },
    ]);

    const menuRender = menus.map(menu =>
        <li key={menu.text}>
            <Link className={(location.pathname === menu.to) ? 'active' : ''} to={menu.to}>
                {menu.text}
            </Link>
        </li>
    );

    return (
        <nav className={"nav " + className}>
            <ul>{menuRender}</ul>
        </nav>
    );
}