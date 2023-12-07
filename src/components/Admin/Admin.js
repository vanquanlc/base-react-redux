import SideBarAdmin from "./SideBarAdmin";
import './AdminPage.scss'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}

export default Admin;