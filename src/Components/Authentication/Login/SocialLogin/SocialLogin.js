import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.config';
import { ImGoogle3 } from 'react-icons/im';
import { FaFacebook } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';


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
        <div className='text-center mb-5'>
            <div className='d-flex mt-3'>
                <hr className='w-50' />
                <p className='mx-2'>or</p>
                <hr className='w-50' />
            </div>
            <>
            {error ? <p className='text-danger'>{error.message}</p> : "" }
            </>
            <div className='d-flex gap-3 flex-column flex-md-row '>
            <button className='btn btn-outline-dark px-5' onClick={() => signInWithGoogle()}> <ImGoogle3 className='mx-2'/> Google</button>
            <button className='btn btn-outline-dark px-5' onClick={() => signInWithFacebook()}><FaFacebook className='mx-2'/>  Facebook</button>
            <button className='btn btn-outline-dark px-5' onClick={() => signInWithGithub()}><RiGithubFill className='mx-2'/>  Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
