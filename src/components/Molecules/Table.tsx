import { ReactElement, ReactNode } from "react";
import "./Table.scss";

export type TableOptions = {
    thead: ReactNode | ReactElement,
    tbody: ReactNode | ReactElement
}

export default function Table({ thead, tbody }: TableOptions) {
    return (
        <table>
            <thead>{thead}</thead>
            <tbody>{tbody}</tbody>
        </table>
    );
}