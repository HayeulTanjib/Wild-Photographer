import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {

    const [signInWithGoogle, googleuser, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if(googleuser){
        navigate(from, { replace: true });
    }
    if(fbuser){
        navigate(from, { replace: true });
    }
    if(githubuser){
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
            <div>
            <button className='btn btn-outline-dark px-5' onClick={() => signInWithGoogle()}> <FcGoogle className='mx-2'/> Google</button>
            <button className='btn btn-outline-dark px-5' onClick={() => signInWithFacebook()}>  Facebook</button>
            <button className='btn btn-outline-dark px-5' onClick={() => signInWithGithub()}>  Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;