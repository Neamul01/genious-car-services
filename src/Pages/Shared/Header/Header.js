import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import useUser from '../../../hooks/useUser';

const Header = () => {
    const { authUser } = useUser();



    const handleSignOut = () => {
        signOut(auth)
    }


    return (
        <Navbar bg="dark" sticky='top' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><img style={{
                    width: '12rem'
                }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as="li"><CustomLink to='/features'>Features</CustomLink></Nav.Link>
                        <Nav.Link as="li"><CustomLink to='/'>Home</CustomLink></Nav.Link>
                        <Nav.Link as="li"><CustomLink to='/about'>About</CustomLink></Nav.Link>
                        <p className='text-white pt-1'>{authUser?.displayName}</p>
                        {authUser
                            ?
                            <Nav.Link as="li"><span onClick={handleSignOut}>Log Out</span></Nav.Link>
                            :
                            <Nav.Link as="li"><CustomLink to='/login'>Login</CustomLink></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;