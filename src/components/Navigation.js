import React, { useState, useEffect } from 'react';
import createRequest from '../request';
import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {

    const [userDetails, setUserDetails] = useState({
        error: ''
    })

    useEffect( () => {
        console.log('fetching user')
        fetchUser()
    }, [])


    const fetchUser = () => {
        createRequest("/profile.json").then((response) => {
            setUserDetails(response);
            console.log(response)
        });
    };


    return (
        
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Expense Trackr</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Transactions" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/transactions">Expenses Only</NavDropdown.Item>
                            <NavDropdown.Item href="/transactions">Income Only</NavDropdown.Item>
                            <NavDropdown.Item href="/transactions">By Category</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                        <Nav.Link href="/profile/edit">Edit Profile</Nav.Link>
                        <Nav.Link href="/profile/changepassword">Change Password</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
        
        
        
        
        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="/">Expense Trackr</Navbar.Brand>
        //         <Nav className="mr-auto ">class="text-right"
        //             <Nav.Link href="/">Home</Nav.Link>
        //             <Nav.Link href="/transactions">Transactions</Nav.Link>
        //             <Nav.Link href="/categories">Categories</Nav.Link>
        //             <Nav.Link href="/profile">Profile</Nav.Link>
        //             <Nav.Link href="#logout">Log In</Nav.Link>
        //             <Nav.Link href="#login">Log Out</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
        
    );
}

export default Navigation;