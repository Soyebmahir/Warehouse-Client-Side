import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const handleLogOut = () => {
        signOut(auth)
        navigate('/home')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>

                    <Navbar.Brand as={Link} to='/home'>workOut gearS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addItem">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <button onClick={handleLogOut} className='btn btn-link text-white text-decoration-none'>Log out</button>
                                    : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;