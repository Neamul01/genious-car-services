import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><img style={{
                    width: '12rem'
                }} src={logo} alt="" /></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;