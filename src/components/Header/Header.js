import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate   } from 'react-router-dom';
import "./Header.scss"
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGOUT_SUCCESS } from '../../redux/action/userAction';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const Header = () => {
  const navigate = useNavigate();
  const [isShowLogout, setShowlogout] = useState(false);
  const handleClickChangePage = (page) => {
    navigate(page)
  }
  const handleLogout = () => {
    dispath({type: USER_LOGOUT_SUCCESS})
    handleClose()
    toast.success('Logout Success!')
  }
  const handleClose = () => {
    setShowlogout(false)
  }
  const dispath = useDispatch();
  const isLogInSuccess = useSelector(state => state.user.isLogInSuccess);
  const account = useSelector(state => state.user.account);
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary" id='header'>
      <Container>
        <NavLink className='navbar-brand' to="/">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/users">Users</NavLink>
            <NavLink className='nav-link' to="/admin">Admin</NavLink>
          </Nav>
          {
            isLogInSuccess
            ?
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => setShowlogout(true)} >Logout</NavDropdown.Item>
  
              </NavDropdown>
            :
            <>
              <button onClick={()=> handleClickChangePage('./login')} className='btn-create-account btn-login'>Login</button>
              <button onClick={()=> handleClickChangePage('./signup')} className='btn-create-account btn-signup'>Sign up</button>
            
            </>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal show={isShowLogout} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to logout</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
            variant="danger" 
            onClick={()=> handleLogout()}
          >
            Log out
          </Button >
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;