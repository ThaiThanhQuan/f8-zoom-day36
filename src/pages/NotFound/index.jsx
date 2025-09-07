import { NavLink } from "react-router";
import clsx from "clsx";

import styles from './NotFound.module.scss'
function NotFound() {
    return ( 
       <div>
            <img className={clsx(styles.notfound)} src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg" alt="Page Not Found 404" />
            <NavLink className={clsx(styles.btn)} to="/">Back to Home</NavLink>
       </div>
    );
}

export default NotFound;