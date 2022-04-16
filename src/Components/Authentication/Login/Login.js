import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.config';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const emailRef = useRef('');
    const passwordRef = useRef(''); 

    const handleLoginForm = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password)

        //clear input
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    if(user){
        navigate('/');
    }



    return (
        <div>
            <div className='w-50 mx-auto '>
                <legend className='text-center'>LogIn</legend>
                <Form onSubmit={handleLoginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" className='shadow-none' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" className='shadow-none' placeholder="Password" required/>
                    </Form.Group>
                    <div>
                        <p>Not Member Yet? <span className='text-primary '><Link to="/register">Register Here</Link> </span></p>
                    </div>
                    <>
                    {error ? <p className='text-danger'>{error.message}</p> : "" }
                    </>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;