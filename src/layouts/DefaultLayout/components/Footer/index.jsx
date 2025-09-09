import clsx from 'clsx';

import styles from './Footer.module.scss'
import { NavLink } from 'react-router';

function Footer() {
    return ( 
    <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.content)}>
            <p className={clsx(styles.title)}>Company</p>
            <ul className={clsx(styles.minicontent)}>
                <li className={clsx(styles.context)}>Projects</li>
                <li className={clsx(styles.context)}>Contacts</li>
                <li className={clsx(styles.context)}>Open source</li>
                <li className={clsx(styles.context)}>Blogs</li>
            </ul>
        </div>

       <div className={clsx(styles.content)}>
            <NavLink className={clsx(styles.title)} to="/contact">Contacts</NavLink>
            <ul className={clsx(styles.minicontent)}>
                <li className={clsx(styles.context)}>Web Development</li>
                <li className={clsx(styles.context)}>Mobile Apps</li>
                <li className={clsx(styles.context)}>UI/UX Design</li>
                <li className={clsx(styles.context)}>Consulting</li>
            </ul>
        </div>

        <div className={clsx(styles.content)}>
            <NavLink className={clsx(styles.title)} to="/privacy">Privacy</NavLink>
            <ul className={clsx(styles.minicontent)}>
                <li className={clsx(styles.context)}>Email</li>
                <li className={clsx(styles.context)}>Phone</li>
                <li className={clsx(styles.context)}>LinkedIn</li>
                <li className={clsx(styles.context)}>GitHub</li>
            </ul>
            </div>
        </div> 
);
}

export default Footer;