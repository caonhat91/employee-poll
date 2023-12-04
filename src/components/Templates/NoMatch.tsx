import { Link } from "react-router-dom";
import NoMatchCss from './NoMatch.module.scss';

export default function NoMatch() {
    return (
        <div className={NoMatchCss['not-found']}>
            <p className={NoMatchCss['title']}>404</p>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}