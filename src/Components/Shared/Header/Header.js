import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" >Johan Tales</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link > <Link to="/">Home</Link> </Nav.Link>
                            <Nav.Link > <Link to={'/checkout'}>CheckOut</Link> </Nav.Link>
                            <Nav.Link> <Link to={'/blog'}>Blog</Link> </Nav.Link>
                            <Nav.Link> <Link to={'/About'}>About</Link> </Nav.Link>
                            <Nav.Link> <Link to={'/login'}>Login</Link> </Nav.Link>
                            <Nav.Link> <Link to={'/register'}>Register</Link> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;