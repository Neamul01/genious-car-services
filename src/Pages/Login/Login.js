import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLoginForm = () => {
        console.log(email, pass)
    }

    return (
        <div>
            <div className='m-auto'>
                <h2 className="text-primary text-center mt-5">Login</h2>
            </div>
            <Form className='w-50 m-auto mt-1 py-5 px-3 bg-light rounded shadow-lg' onSubmit={handleLoginForm}>
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
        </div>
    );
};

export default Login;