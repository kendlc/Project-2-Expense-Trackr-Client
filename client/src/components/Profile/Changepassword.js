import React, { useState, useEffect } from 'react';
import { Navigate } from  'react-router-dom';
import createRequest from '../../request';
import Errors from './Errors'
import { Form, Button } from 'react-bootstrap';

function Changepassword() {
    
    const [userDetails, setUserDetails] = useState({
        
        password: '',
        password_confirmation: ''
    })

    const [errors, setErrors] = useState([]);

    useEffect( () => {
        console.log('fetching user')
        fetchUser()

    }, [])

    const fetchUser = () => {
        createRequest("/profile.json").then((response) => {
            setUserDetails(response);
        });
    };
    
   

    const handleChange = (event) => {
        setUserDetails((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = event => {
        event.preventDefault();
         savePassword()
    }

    const savePassword = event => {
        console.log('test saveProfile');
        console.log('UserDetails', userDetails );

        let token = localStorage.getItem('token');
        fetch('http://localhost:3000/profile_update.json?', {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },body: JSON.stringify( {user: userDetails} ),
        })
        .then(response => response.json())
        .then(jsonResponse => {
            // setSignupErrors(jsonResponse.errors);
            console.log(jsonResponse)
            setErrors(jsonResponse.errors)
        })
    }
  
  
    return (
    

        <div className="col-md-4 offset-md-4 bg-light p-3">
        <h3 className="bg-light">Change password</h3>
        <Form onSubmit = { handleSubmit }>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control name='password' type="password" onChange={ handleChange } value={ userDetails.password } required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control name='password_confirmation' type="password" onChange={ handleChange } value={userDetails.password_confirmation} required  />
        </Form.Group>

        <Button variant="secondary" type="submit">
            Submit
        </Button>

        </Form>
        
        {/* { errors ? < Errors errors = {errors} /> : <Navigate to = "/profile" /> } */}
               
       </div>
    )
  
}

export default Changepassword