import React from 'react';
import pic from './101010.jpg';

const About = () => {
    return (
        <div className='vh-100'>
            <h2 className='text-center pt-5'>About</h2>
            <div className='d-flex gap-5 flex-column flex-md-row justify-content-center align-items-center '>
                <h6 className='w-50'>
                    Passionate Software Developer. Love to explore new things everyday.
                    On the way to full-stack developer.
                    I'm collaborative, friendly, and easy to talk to.
                </h6>
                <img src={pic} className="img-fluid img-thumbnail w-25 shadow-lg" alt="" />
            </div>
        </div>
    );
};

export default About;