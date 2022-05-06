import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Profile  from './Profile/Profile';
import ProfileUpdate from './Profile/ProfileUpdate';
import Changepassword from './Profile/Changepassword';
import SignUp from './Authentication/SignUp';
import TransactionsDisplay from './Transaction/TransactionsDisplay';
import NewTransaction from './Transaction/NewTransaction';

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes(props) {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<SignUp signUp={props.signUp} errors={props.signupErrors}/>} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/edit' element={<ProfileUpdate />} />
        <Route path='profile/changepassword' element={<Changepassword />} />
        <Route path="transactions" element={<TransactionsDisplay/>} />
        <Route path="newtransaction" element={<NewTransaction/>} />
      </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes