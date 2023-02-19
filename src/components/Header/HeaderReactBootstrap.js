import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../../img/vv.png"
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container  >
          <Navbar.Brand className={s.logo} as={NavLink} to="/Home"><img src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/FavoritePlaces">Favorite places</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    </div>
  );
}

export default Header;
