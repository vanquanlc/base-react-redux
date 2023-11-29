import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import "./Header.scss"
const Header = () => {
  return (
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

          <button className='btn-create-account btn-login'>Login</button>
          <button className='btn-create-account btn-signup'>Sign up</button>

          {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>

            </NavDropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;