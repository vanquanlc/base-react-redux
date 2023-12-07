import ManageCreateUsers from "./ManageCreateUsers";
import { FaCirclePlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import TableUser from "./TableUser";
import { getAllUserService, getAllUserServiceWithPaginate } from '../../../services/apiUserService';
import { useEffect, useState } from 'react';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";



const ManageUsers = () => {
    const LIMIT_USER = 10;
    const [pageCount, setPageCount] = useState(0);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [idDeleteUser, setIdDeleteUser] = useState('');
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [currentPage, setCurrentPage] = useState(1);


    const getAllUsers = async(page) => {
        setCurrentPage(page)
        const data = await getAllUserServiceWithPaginate(page, LIMIT_USER);
        setListUsers(data.DT.users)
        setPageCount(data.DT.totalPages)
    }

    useEffect(() => {
        getAllUsers(1);
    }, []);


    return (
    <>
        <div>Manage Users components</div>
        <Button 
            variant="primary"  
            className="btn-add-new-user" 
            onClick={() => setShowModalCreateUser(true)}
        >
            <FaCirclePlus/>
            <span>Add new user</span>

        </Button>
        <ManageCreateUsers
            show={showModalCreateUser}
            setShow={setShowModalCreateUser}
            setListUsers={setListUsers}
            listUsers={listUsers}

        />
        <ModalUpdateUser
            show={showModalUpdateUser}
            setShow={setShowModalUpdateUser}    
            setListUsers={setListUsers}
            listUsers={listUsers} 
            dataUpdate = {dataUpdate}
            getAllUsers={getAllUsers}
            currentPage={currentPage}
        />
        <ModalViewUser
            dataView={dataView}
            show={showModalViewUser}
            setShow={setShowModalViewUser}
        />
        <ModalDeleteUser
            idDeleteUser={idDeleteUser}
            show= {showModalDeleteUser}
            setShow={setShowModalDeleteUser}
            getAllUsers={getAllUsers}
            currentPage={currentPage}
        />
        <div className="table-user-container">
            <TableUser 
                listUsers={listUsers}
                pageCount={pageCount}
                setListUsers={setListUsers}
                setShowModalUpdateUser={setShowModalUpdateUser}   
                setDataUpdate= {setDataUpdate}
                setDataView = {setDataView}
                setShowModalViewUser={setShowModalViewUser}
                setShowModalDeleteUser={setShowModalDeleteUser}
                setIdDeleteUser={setIdDeleteUser}
                getAllUsers={getAllUsers}
            />

        </div>

    </>
    )
}
export default ManageUsers;