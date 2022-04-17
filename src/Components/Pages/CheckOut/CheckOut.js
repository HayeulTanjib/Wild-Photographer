import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const nameRef = useRef("");
    const emailRef = useRef("");
    const addressRef = useRef("");
    const numberRef = useRef("");


    const handleQueryForm = (event) => {
        event.preventDefault();

        toast.success("Thank's for the booking")

        //clear input
        nameRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";
        numberRef.current.value = "";
    }


    return (
        <div className=' mt-5 text-center vh-100'>
            <h2>Welcome to ViewFinder world</h2>
            <h5>Hope Your Journey Will be Exciting!</h5>

            <div className='w-50 mx-auto mt-4'>
                <h6>Checkout Form</h6>
                    <hr className='w-50 mx-auto' />
                <Form onSubmit={handleQueryForm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" className='shadow-none' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" className='shadow-none' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control ref={addressRef} type="text" className='shadow-none' placeholder="Your Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control ref={numberRef} type="text" className='shadow-none' placeholder="Your Mobile Number" required />
                    </Form.Group>

                    <Button variant="primary" type="submit"  >
                        Submit
                    </Button>
                <ToastContainer/>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;