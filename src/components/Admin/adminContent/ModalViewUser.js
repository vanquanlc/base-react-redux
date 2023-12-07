
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import imageUser from '../../../assets/userDefault.webp'
import './manageUser.scss'


const ModalViewUser = ({show, dataView, setShow}) => {
const handleClose = () => setShow(false);
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
          <Modal.Title>Detail user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card style={{ width: '18rem', margin: 'auto' }}>
                <Card.Img variant="top" src={ dataView.image ? `data:image/jpeg;base64,${dataView.image}` : imageUser} />
                <Card.Body>
                <Card.Text>
                    Email: {dataView.email}
                </Card.Text>
                <Card.Text>
                    Username: {dataView.username}
                </Card.Text>
                <Card.Text>
                    Role: {dataView.role}
                </Card.Text>
                </Card.Body>
            </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViewUser;