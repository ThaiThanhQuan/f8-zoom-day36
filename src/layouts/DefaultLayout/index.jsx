import clsx from 'clsx';
import { Outlet } from 'react-router';

import Header from '../components/Header'
import Footer from './components/Footer';
import styles from './DefaultLayout.module.scss'

function DefaultLayout() {
    return (  
       <div>
            <Header />
                <div className={clsx(styles.wrapper)}>
                    <Outlet />
                </div>
            <Footer />
       </div>
    );
}

export default DefaultLayout;