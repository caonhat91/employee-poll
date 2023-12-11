import "./Popup.scss"

export type PopupOptions = { className: string, menus: { text: string, onDispatch: () => void }[] };

export default function Popup({ className, menus }: PopupOptions) {

    const menuRender = menus.map(menu => {
        return <li key={menu.text}><a href="#!" onClick={menu.onDispatch}>{menu.text}</a></li>;
    })

    return (<ul className={"popup " + className}>{menuRender}</ul>);
}