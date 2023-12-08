import SideBarAdmin from "./SideBarAdmin";
import './AdminPage.scss'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [collapsed, setcollapsed] = useState(false);

    return(
        <div className="admin-contaier">
            <div className="admin-sidebar"> 
                <SideBarAdmin setcollapsed={setcollapsed} collapsed={collapsed}/>
            </div>
            <div className="admin-content-container">
                <div className="admin-header">
                    admin header
                </div>
                <div className="admin-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Admin;