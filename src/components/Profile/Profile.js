import React, { useEffect, useState } from 'react';
import ProfileView from './ProfileView';
import createRequest from '../../request';
import { Button } from 'react-bootstrap';
import './Profile.css'

const Profile = (props) => {
    const [state, setState] = useState( {
        users: []
    });

    useEffect( () => {
        const fetchUser = () => {
            createRequest("/profile.json").then((response) => {
                setState({users: response});
            });
        };
        fetchUser();
    }, []);

    return (
            <div className="user-container col-md-4 offset-md-4 bg-light p-3">
                <ProfileView view={ state } />
                <span className = "custom-style">
                    <Button className="btn-mr-1" variant="secondary" href="/profile/edit">Edit Profile</Button>
                    <Button className="btn" variant="secondary" href="/profile/changepassword">Change Password</Button>
                </span>
            </div>
    )
}

export default Profile;
