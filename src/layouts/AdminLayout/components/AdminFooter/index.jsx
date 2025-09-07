import clsx from 'clsx';

import styles from './AdminFooter.module.scss'

function AdminFooter() {
    return ( 
       <div className={clsx(styles.wrapper)}> 
            <h1 >Footer</h1>
       </div>
     );
}

export default AdminFooter;