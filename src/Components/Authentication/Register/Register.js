import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [accept, setAccept] = useState(false);
    const navigate = useNavigate()


    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPassRef = useRef("");

    //Form Handler
    const handleRegForm = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPassRef.current.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
            navigate('/');
        }
        else {
            toast.error("Password Not Matched!");
            return;
        }

        //clear input
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPassRef.current.value = "";
    }


    return (
        <div className='w-50 mx-auto'>
            <legend className='text-center'>Registration</legend>
            <div>
                <p className='text-center'>Already Member? <span className='text-primary '><Link to="/login">Login Here</Link> </span></p>
            </div>
            <Form onSubmit={handleRegForm}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" className='shadow-none' placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" className='shadow-none' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" className='shadow-none' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPassRef} type="password" className='shadow-none' placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAccept(!(accept))} className='shadow-none' label="Accept Terms & Conditions" />
                </Form.Group>

                <Button variant= {!(accept) ? "danger" : "primary"} type="submit" disabled={!accept} >
                    Register
                </Button>
                {error ? <p className='text-danger'>{error.message}</p> : ""}
                <ToastContainer autoClose={3000} />
            </Form>
            <SocialLogin/>
        </div>
    );
};

export default Register;