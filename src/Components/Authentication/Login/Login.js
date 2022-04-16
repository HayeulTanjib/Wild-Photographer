import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {


const handleLoginForm = (event) => {

}



    return (
        <div>
            <div className='w-50 mx-auto '>
                <legend className='text-center'>LogIn</legend>
                <Form onSubmit={handleLoginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" className='shadow-none' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" className='shadow-none' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;