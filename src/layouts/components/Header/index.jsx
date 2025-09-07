import clsx from 'clsx';

import styles from './Header.module.scss'
import { NavLink } from 'react-router';

function Header() {
    return ( 
        <div className={clsx(styles.wrapper)}>
           <nav className={clsx(styles.content)}>
                <NavLink className={clsx(styles.title)} to= "/">Home</NavLink>
                <NavLink className={clsx(styles.title)} to= "/about">About</NavLink>
                <NavLink className={clsx(styles.title)} to= "/posts">Posts</NavLink>
                <NavLink className={clsx(styles.title)} to= "/posts/:id">PostDetail</NavLink>
                <NavLink className={clsx(styles.title)} to= "/contact">Contact</NavLink>
                <NavLink className={clsx(styles.title)} to= "/privacy">Privacy</NavLink>

               <div className={clsx(styles.authwrapper)}>
                    <NavLink className={clsx(styles.auth)} to= "/login">Đăng ký</NavLink>
                    <NavLink className={clsx(styles.auth)} to= "/register">Đăng nhập</NavLink>
               </div>
           </nav>
        </div>
     );
}

export default Header;