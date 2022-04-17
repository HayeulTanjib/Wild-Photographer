import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.config';
import CustomLink from './CustomLink/CustomLink';
import { GrCamera } from 'react-icons/gr';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" >Johan - The Wild Photographer <GrCamera/> </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to={'/checkout'}>CheckOut</CustomLink>
                            <CustomLink to={'/blog'}>Blog</CustomLink>
                            <CustomLink to={'/About'}>About</CustomLink>

                            {!user ? 
                            <>
                            <CustomLink to={'/login'}>Login</CustomLink>
                            <CustomLink to={'/register'}>Register</CustomLink>
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