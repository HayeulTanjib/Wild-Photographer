import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='vh-100 mx-auto text-center mt-5'>
            <h2>404</h2>
            <h3>Ooops! You weren't supposed to see this</h3>
            <Link to={'/'} className="btn btn-primary mt-3">Go Back Home</Link>
        </div>
    );
};

export default NotFound;