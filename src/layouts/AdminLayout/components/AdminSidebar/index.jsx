import clsx from 'clsx';
import { NavLink } from 'react-router';

import styles from './AdminSidebar.module.scss'
function AdminSidebar() {
    return ( 
         <nav className={clsx(styles.wrapper)}>
            <NavLink className={clsx(styles.content)} to="/admin">Dashboard</NavLink>
            <NavLink className={clsx(styles.content)} to="/admin/users">Quản lý Users</NavLink>
            <NavLink className={clsx(styles.content)} to="/admin/settings">Cài đặt</NavLink>
         </nav>
     );
}

export default AdminSidebar;