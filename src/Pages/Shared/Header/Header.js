import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, user => {
        setUser(user)
    })

    const handleSignOut = () => {
        signOut(auth)
    }


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
                    <p className='text-white'>{user?.email}</p>
                    {user
                        ?
                        <Nav.Link><span onClick={handleSignOut}>Log Out</span></Nav.Link>
                        :
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;