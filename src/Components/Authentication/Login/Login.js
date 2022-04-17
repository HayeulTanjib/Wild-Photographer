import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.config';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
  

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


    //Password Reset handler
   const handlePasswordReset = async () => {
    const email = emailRef.current.value;
    if(email){
        await sendPasswordResetEmail(email);
        toast.success("Password Reset Email Sent")
    }
    else{
        toast.error("Enter Your Email First")
    }
    
   }




    return (
        <div>
            <div className='w-50 mx-auto vh-100'>
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
                    <>
                    {error ? <p className='text-danger'>{error.message}</p> : "" }
                    </>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div className='mt-4'>
                        <p>Not Member Yet? <button className='py-0 btn btn-info'><Link className='text-decoration-none text-dark' to="/register">Register Here</Link> </button></p>
                        <p>Forgot Password? <button onClick={handlePasswordReset} className='py-0 btn btn-warning'>Reset Password</button></p>
                    </div>
                </Form>
                <SocialLogin/>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Login;