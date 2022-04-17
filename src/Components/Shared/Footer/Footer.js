import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 p-2 bg-light text-center fw-bold'>
        <p>&copy; Copyright: Johan - The Wild Photographer | {new Date().getFullYear()} </p>    
        </div>
    );
};

export default Footer;