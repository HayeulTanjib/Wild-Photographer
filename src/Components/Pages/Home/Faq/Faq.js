import React from 'react';
import { Accordion } from 'react-bootstrap';
import { BsQuestionLg } from 'react-icons/bs';

const Faq = () => {

    return (
        <div>
            <h2 className='pt-5 text-center'>FAQ <BsQuestionLg/></h2>
            <hr className='w-25 mx-auto' />
            <Accordion className='w-75 mx-auto py-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can I enroll in courses?</Accordion.Header>
                    <Accordion.Body>
                        You are kindly requested to fill up the admission form and Pay the Money.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the documents needed to complete the admission process?</Accordion.Header>
                    <Accordion.Body>
                        A) One copy of passport size photograph

                        B) Photocopy of national ID card/birth certificate/passport copy

                        C) Course Fees
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is there any discount on the course?</Accordion.Header>
                    <Accordion.Body>
                    Sorry, No discounts right now. Keep in touch for future offers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Do I need to pay the course fee at one go?</Accordion.Header>
                    <Accordion.Body>
                    Yes
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Do you provide certificates after completing the course ?</Accordion.Header>
                    <Accordion.Body>
                    Yes, after completing the course successfully, you will get a certificate.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default Faq;