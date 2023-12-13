import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../plugins/store/slices/userSlice";
import { AppDispatch, getUser } from "../../plugins/store";
import { createPortal } from "react-dom";
import { useState } from "react";
import Nav from "../Molecules/Nav";
import AvatarGroup from "../Molecules/AvatarGroup";
import Popup from "../Molecules/Popup";
import "./Navigator.scss"

export default function Navigator() {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector(getUser);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="navigator">
            <Nav className="wrapper-left" />
            <div className="wrapper-right" onClick={() => setIsOpen(!isOpen)}>
                <AvatarGroup {...user} />
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7.58579 7.58579C8.36684 8.36684 9.63317 8.36684 10.4142 7.58579L17 1" />
                </svg>
            </div>
            {isOpen && createPortal(
                <Popup className={isOpen ? 'open' : ''} menus={[{
                    text: "Sign Out",
                    onDispatch: () => dispatch(logout() as any)
                }]} />,
                document.body
            )}
        </div>
    );
}