import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.config';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" >Johan Tales</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/">Home</Link>
                            <Link to={'/checkout'}>CheckOut</Link>
                            <Link to={'/blog'}>Blog</Link>
                            <Link to={'/About'}>About</Link>

                            {!user ? 
                            <>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/register'}>Register</Link>
                            </>
                            :
                            <>
                            <b className='mx-3'>{user.displayName}</b>
                            <button onClick={() => signOut(auth)} className='btn btn-outline-danger py-0'>Logout</button>
                            </>
                        }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;