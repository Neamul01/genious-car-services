import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import useUser from '../../../hooks/useUser';
import RequireAuth from '../RequireAuth/RequireAuth';


const Header = () => {
    const authUser = useUser();



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
                    <Nav.Link><CustomLink to='/'>Home</CustomLink></Nav.Link>

                    <Nav.Link><CustomLink to='/features'>Features</CustomLink></Nav.Link>

                    <RequireAuth>
                        <Nav.Link><CustomLink to='/about'>About</CustomLink></Nav.Link>
                    </RequireAuth>

                    <p className='text-white pt-1'>{authUser?.displayName}</p>
                    {authUser
                        ?
                        <Nav.Link><span onClick={handleSignOut}>Log Out</span></Nav.Link>
                        :
                        <Nav.Link><CustomLink to='/login'>Login</CustomLink></Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;