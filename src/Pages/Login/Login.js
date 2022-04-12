import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import useGoogleSignIn from '../../hooks/useGoogleSignIn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleGoogleSignIn = useGoogleSignIn()

    const navigate = useNavigate();

    const handleLoginForm = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                navigate('/')
            })
    }

    const handleGoogleSignInIn = () => {
        handleGoogleSignIn()
    }

    return (
        <div>
            <div className='m-auto'>
                <h2 className="text-primary text-center mt-5">Login</h2>
            </div>
            <div className='w-50 m-auto mt-1 py-5 px-3 bg-light rounded shadow-lg'>
                <Form onSubmit={handleLoginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={e => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={e => setPass(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <p>New in Car Doctor? <Link to={'/register'}>Register</Link></p>
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='d-flex justify-content-center h-auto w-100 mt-4 border-none' variant='white' type="submit" >
                    <div>
                        <span className=' google-btn me-2' onClick={handleGoogleSignInIn}><GoogleIcon className='text-primary me-1' /> Google</span>
                        <span className=' google-btn'><FacebookIcon className='text-primary me-1' />Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;