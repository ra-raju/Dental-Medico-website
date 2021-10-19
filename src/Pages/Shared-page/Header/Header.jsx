import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  //use auth
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Dental Medico</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/medicine">
                Medicine
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
            {user.email && (
              <Navbar.Text>
                Signed in as: <b className="text-white">{user.displayName}</b>
                <span className="py-2 mx-4" title="logout" onClick={logOut}>
                  <i className="fas fa-sign-out-alt  logout-icon"></i>
                </span>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
