import { NavLink } from "react-router";
import clsx from "clsx";

import styles from './AuthSidebar.module.scss'
function AuthSidebar() {
    return ( 
        <nav className={clsx(styles.wrapper)}>
            <NavLink className={clsx(styles.content)} to="/login">Đăng nhập</NavLink>
            <NavLink className={clsx(styles.content)} to="/register">Đăng ký</NavLink>
            <NavLink className={clsx(styles.content)} to="/forgetpassword">Quên mật khẩu</NavLink>
        </nav>
     );
}

export default AuthSidebar;