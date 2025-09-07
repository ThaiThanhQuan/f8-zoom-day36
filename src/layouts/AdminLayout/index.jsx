import { Outlet } from "react-router";
import clsx from "clsx";

import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import styles from './AdminLayout.module.scss'
function AdminLayout() {
    return ( 
        <div>
            <AdminHeader/>
            <div className={clsx(styles.wrapper)}>
                <AdminSidebar/>
                <Outlet/>
            </div>
            <AdminFooter/>
        </div>
       
     );
}

export default AdminLayout;