import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './manageUser.scss'
import { updateServiceUser } from '../../../services/apiUserService';
import {toast} from 'react-toastify'
import ModalFormUpdateUser from './ModalFormUpdateUser';
import _, { set } from 'lodash';

const ModalUpdateUser = ({show, setShow, listUsers, setListUsers, dataUpdate, ...rest}) => {

  const handleClose = () => setShow(false);
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [userImage, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('')
  useEffect(()=>{
    if(!_.isEmpty(dataUpdate)){
      setEmail(dataUpdate.email);
      setUserName(dataUpdate.username);
      setRole(dataUpdate.role);
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
        
      }else{
        setPreviewImage('');
      }

    }
    
  }, [dataUpdate])

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)
  
  }

  const validateUsername = (username) =>  {
    if (!_.isEmpty(username)) {
      return true;
    }
  }
  const handleSubmitModal = async() => {
    const isValidateEmail = validateEmail(email);
    const isValidatePassword = validatePassword(password);
    const isValidateUsername = validateUsername(username);
    if (!isValidateEmail) {
      toast.error('Email invalidate');
      return;
    }
    // if (!isValidatePassword) {
    //   toast.error('Password must consist of 8 characters containing at least one uppercase letter, lowercase letter and number');
    //   return;
    // }
    if(!isValidateUsername){
      toast.error('Username cannot be blank');
      return;
    }

    const data = await updateServiceUser(dataUpdate.id, username, role, userImage);
    if(data && data.EC !== 0){
      toast.error(data.EM)
      return;
    }
    if(data && data.EC === 0){
      handleClose();
      toast.success(data.EM);
      await rest.getAllUsers(rest.currentPage);
      return;

    }
  }

  return (
    <>
      <Modal 
        show={show} 
        onHide={handleClose}
        size='s'
        backdrop = 'static'
        className='modal-manage-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormUpdateUser
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
          <Button variant="primary"  onClick={() => handleSubmitModal()}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;