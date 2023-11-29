import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'


import './manageUser.scss'
import ModalFormCreateUser from './ModalFormCreateUser';

const ManageCreateUsers = ({show, setShow}) => {

  const handleClose = () => setShow(false);


  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [userImage, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('')


  const handleSubmitModal = async() => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('role', role);
    formData.append('userImage', userImage);

    const reponse = await axios.post("http://localhost:8081/api/v1/participant", formData)
    console.log(reponse);

  }



  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add new user
      </Button> */}

      <Modal 
        show={show} 
        onHide={handleClose}
        size='s'
        backdrop = 'static'
        className='modal-manage-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormCreateUser 
            email={email}
            userName={username}
            password={password}
            role={role}
            image={userImage}
            previewImage={previewImage}
            setEmail={setEmail}
            setUserName={setUserName}
            setPassword={setPassword}
            setRole={setRole}
            setImage={setImage}
            setPreviewImage={setPreviewImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitModal()}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageCreateUsers;