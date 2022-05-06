import React, { useState, useEffect } from 'react';
import createRequest from '../request';
import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import isAuthed from '../isAuthed';


function Navigation() {

    const [userDetails, setUserDetails] = useState({})

    useEffect( () => {
        fetchUser()
    }, [])

    const fetchUser = () => {
        createRequest("/profile.json").then((response) => {
            setUserDetails(response);
        });
    };
    

    const signOut = () => {
        localStorage.removeItem('token')
    };
  

    return (
        
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                { isAuthed() && <Navbar.Brand href="/transactions">Expense Trackr</Navbar.Brand> }
                { !isAuthed() && <Navbar.Brand href="/">Expense Trackr</Navbar.Brand> }
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        { isAuthed() && <>
                            {/* <Nav.Link href="/transactions">Home</Nav.Link> */}
                            <Nav.Link href="/transactions">Transactions</Nav.Link>
                            </>
                        }
                        </Nav>
                        <Nav>
                        { isAuthed() && <>
                            <Nav.Link href="/profile">My Profile</Nav.Link>
                            <Nav.Link href="/profile/edit">Edit Profile</Nav.Link>
                            <Nav.Link href="/profile/changepassword">Change Password</Nav.Link>
                            </>
                        }    
                            { isAuthed() && <Nav.Link eventKey={2} onClick={signOut} href="/">Sign Out</Nav.Link>}
                            { !isAuthed() && <Nav.Link eventKey={2} href="/">Sign In</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>  
            
    );
}
export default Navigation;