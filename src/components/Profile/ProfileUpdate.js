import React, { useState, useEffect } from 'react';
import { Navigate } from  'react-router-dom';
import createRequest from '../../request';
import Errors from './Errors'
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Profile.css'

const emailState = {
    email: '',
    error: ''
}

function ProfileUpdate(props) {
    const [userDetails, setUserDetails] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    const [errors, setErrors] = useState([]);

    useEffect( () => {
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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        saveProfile()
    }
    
    const saveProfile = event => {
        let token = localStorage.getItem('token');
        fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/profile_update.json?`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },body: JSON.stringify( {user: userDetails} ),
        })
        .then(response => response.json())
        .then(jsonResponse => {
            setErrors(jsonResponse.errors)
        })
    }

    return (
        <motion.div className="col-md-4 offset-md-4 bg-light p-3 user-container">
            <h3 className="bg-light">Update Profile</h3>
            <Form onSubmit = { handleSubmit }>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='first_name' onChange={ handleChange }
                        value={userDetails.first_name} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='last_name' onChange={ handleChange }
                        value={ userDetails.last_name } required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" onChange={ handleChange }
                        value={userDetails.email} required  />
                </Form.Group>

                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
            { errors ? < Errors errors = {errors} /> : <Navigate to = "/profile" /> }
        </motion.div>
    );
};

export default ProfileUpdate;