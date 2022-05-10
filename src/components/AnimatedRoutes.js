import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Profile  from './Profile/Profile';
import ProfileUpdate from './Profile/ProfileUpdate';
import Changepassword from './Profile/Changepassword';
import SignUp from './Authentication/SignUp';
import TransactionsDisplay from './Transaction/TransactionsDisplay';
import isAuthed from '../isAuthed';

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes(props) {
  const location = useLocation();
  
  if (isAuthed()) {

    return (
    
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<SignUp signUp={props.signUp} errors={props.errors}/>} />
          <Route path='profile' element={<Profile />} />
          <Route path='profile/edit' element={<ProfileUpdate />} />
          <Route path='profile/changepassword' element={<Changepassword />} />
          <Route path="transactions" element={<TransactionsDisplay/>} />
        </Routes>
    </AnimatePresence>
    );

  } else {

    return (
      
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<SignUp signUp={props.signUp} errors={props.errors}/>} />
          <Route path='profile' element={<Home />} />
          <Route path='profile/edit' element={<Home />} />
          <Route path='profile/changepassword' element={<Home />} />
          <Route path="transactions" element={<Home />} />
        </Routes>
      </AnimatePresence>
    );
  };
};

export default AnimatedRoutes;

