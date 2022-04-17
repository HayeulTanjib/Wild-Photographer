import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;