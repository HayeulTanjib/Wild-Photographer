import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.config';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
 
    return (
        <div className='text-center'>
            <div className='d-flex mt-3'>
                <hr className='w-50' />
                <p className='mx-2'>or</p>
                <hr className='w-50' />
            </div>
            <>
            {error ? <p className='text-danger'>{error.message}</p> : "" }
            </>
            <button onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default SocialLogin;