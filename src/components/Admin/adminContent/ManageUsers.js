import ManageCreateUsers from "./ManageCreateUsers";
import { FaCirclePlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { useState } from "react";



const ManageUsers = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);


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

        />
        <div> table user</div>

    </>
    )
}
export default ManageUsers;