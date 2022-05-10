import React from 'react';
import {Form } from 'react-bootstrap';

const ProfileView = (props) => {

    return(

        <div>
            <h3 className="bg-light">User Profile</h3>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <br />
                <Form.Text>{props.profile.first_name}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <br />
                <Form.Text>{props.profile.last_name}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <br />
                <Form.Text>{props.profile.email}</Form.Text>
            </Form.Group>
        </div>
    );
};

export default ProfileView;
