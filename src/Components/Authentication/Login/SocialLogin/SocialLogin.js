import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import Loading from '../../../Shared/Loading/Loading';

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
            <button className=' px-5 py-2 fw-bold border-primary btn btn-outline-warning' onClick={() => signInWithGoogle()}> <FcGoogle className='mx-2'/> Google</button>
        </div>
    );
};

export default SocialLogin;