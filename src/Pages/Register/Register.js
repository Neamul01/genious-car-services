import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import useGoogleSignIn from '../../hooks/useGoogleSignIn';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import auth from '../../firebase.init';
import useFacebookSignIn from '../../hooks/useFacebookSignIn';



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const [check, setCheck] = useState(false);

    const navigate = useNavigate();

    const handleGoogleSignIn = useGoogleSignIn();
    const { handleFacebookSignIn, fbError } = useFacebookSignIn();


    const handleRegisterForm = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log('user created')
            })
            .catch(error => {
                setError(error)
            })

        await sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('email varification send')
            })

        await updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('info updated')
        }).catch(error => {
            setError(error)
        })
        navigate('/')
    }

    const handleGoogleSignInIn = () => {
        const e = handleGoogleSignIn();
        setError(e)
    }

    const handleFbSignIn = () => {
        console.log(fbError)
        handleFacebookSignIn()
    }

    return (
        <div>
            <div className='m-auto'>
                <h2 className="text-primary text-center mt-5">Register</h2>
            </div>
            <div className='w-50 m-auto mt-1 py-5 px-3 bg-light rounded shadow-lg'>
                <Form onSubmit={handleRegisterForm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={e => setName(e.target.value)} type="text" placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={e => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={e => setPass(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Form.Group className="mb-3" >
                        <Form.Check onClick={() => setCheck(!check)} className={check ? 'text-primary' : 'text-danger'} type="checkbox" label="Terms and condition" name='checkbox' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <p>Already Have an Account? <Link to={'/login'}>Login</Link></p>
                    </Form.Group>
                    <Button className='w-100' variant="primary" disabled={!check} type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='d-flex justify-content-center h-auto w-100 mt-4 border-none' variant='white' type="submit" >
                    <div>
                        <span className=' google-btn me-2' onClick={handleGoogleSignInIn}><GoogleIcon className='text-primary me-1' /> Google</span>
                        <span className=' google-btn' onClick={handleFbSignIn}><FacebookIcon className='text-primary me-1' />Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;