import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import {UsuariosContext} from '../../context/UserContext';
import { useContext } from 'react';

function Header() {

  const {logout} = useContext(UsuariosContext);

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Bienvenido {user.nombre}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Informacion</Nav.Link>
            <NavDropdown title="Apartados" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Tienda</NavDropdown.Item>
              {user ? (
                <NavDropdown.Item href="/register">
              </NavDropdown.Item>
              ): (
                <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
              )}
              <NavDropdown.Item href="/users">Users</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {user ? (
          <Button href="/login" onClick={logout} >logout</Button>
        ): (
          <Button href="/login">Login</Button>
        ) }
        
      </Container>
    </Navbar>
  );
}

export default Header;