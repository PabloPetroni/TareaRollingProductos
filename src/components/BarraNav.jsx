import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function BarraNav() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container >
            <Navbar.Brand href="#home">Tarea Productos</Navbar.Brand>
            <Nav className="d-flex justify-content-around">
              <NavLink className="m-3" to="/home">Inicio</NavLink>
              <NavLink className="m-3" to="/">Login</NavLink>
              <NavLink className="m-3" to="/celulares">Celulares</NavLink>
              <NavLink className="m-3" to="/cocina">Cocina</NavLink>
              <NavLink className="m-3" to="/belleza">Belleza</NavLink>
              <NavLink className="m-3" to="/gaming">Gaming</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default BarraNav;