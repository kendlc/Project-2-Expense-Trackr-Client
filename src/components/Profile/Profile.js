import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProfileView from './ProfileView';
import createRequest from '../../request';
import { Button } from 'react-bootstrap';
import './Profile.css';

const Profile = (props) => {
    const [user, setUser] = useState({
        profileData: {}
    });

    useEffect( () => {
        const fetchUser = () => {
            createRequest("/profile.json", 'GET').then((response) => {
                setUser({profileData: response});
            });
        };
        fetchUser();
    }, []);

    return (

            <motion.div 
                className="user-container col-md-4 offset-md-4 bg-light p-3"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                delay: 1,
                x: { type: "spring", stiffness: 100 },
                default: { duration: .4 },
                }}
                exit={{opacity: 0}}
            >
                <ProfileView profile={user.profileData} />
                    <span className = "custom-style">
                        <Button className="btn-mr-1" variant="secondary" href="/profile/edit">Edit Profile</Button>
                        <Button className="btn" variant="secondary" href="/profile/changepassword">Change Password</Button>
                    </span>
            </motion.div>
    );
};

export default Profile;
