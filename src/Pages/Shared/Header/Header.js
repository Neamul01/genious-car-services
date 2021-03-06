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
    // console.log(authUser)

    return (
        <Navbar bg="dark" sticky='top' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><img style={{
                    width: '12rem'
                }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navbar-link">
                        <CustomLink to='/'>Home</CustomLink>
                        <Nav.Link style={{ color: 'lightgray' }} href='/home#services'>Services</Nav.Link>
                        <CustomLink to='/features'>Features</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>

                        {
                            authUser?.email && <>
                                <CustomLink to='service'>Manage</CustomLink>
                                <CustomLink to='addservice'>Add</CustomLink>
                                <CustomLink to='order'>Orders</CustomLink>
                            </>
                        }

                        <p className='text-white pt-1'>{authUser?.displayName}</p>

                        {
                            authUser?.email ?
                                <Nav.Link><span onClick={handleSignOut}>Log Out</span></Nav.Link> :
                                <CustomLink to='/login'>Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;