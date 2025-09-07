import { Outlet } from 'react-router';
import clsx from 'clsx';

import Header from '../components/Header';
import AuthSidebar from './components/AuthSidebar'
import styles from './AuthLayout.module.scss'

function AuthLayout() {
    return ( 
        <div>
            <Header/>
            <div className={clsx(styles.content)}>
                <AuthSidebar/>
                <Outlet/>
            </div>
        </div>
     );
}

export default AuthLayout;