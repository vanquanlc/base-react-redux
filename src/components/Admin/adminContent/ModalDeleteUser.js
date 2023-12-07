
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteServiceUser } from '../../../services/apiUserService';
import { toast } from 'react-toastify';

function ModalDeleteUser({setShow, show, idDeleteUser, getAllUsers, currentPage}) {

  const handleClose = () => setShow(false);
  const handleDelete = async() => {
    const res = await  deleteServiceUser(idDeleteUser)
    await getAllUsers(currentPage);
    handleClose()
    toast.success('Delete success :(')
  }
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete this user</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
            variant="danger" 
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;