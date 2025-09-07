import clsx from 'clsx';

import styles from './AdminHeader.module.scss'

function AdminHeader() {
    return ( 
       <div className={clsx(styles.wrapper)}>
            <h1 className={clsx(styles.title)}>Hello, admin</h1>
            <p className={clsx(styles.context)}>Have a good day</p>
       </div>
     );
}

export default AdminHeader;