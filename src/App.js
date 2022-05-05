
import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Category from './components/Category/Category';
import Profile  from './components/Profile/Profile';
import ProfileUpdate from './components/Profile/ProfileUpdate';
import Changepassword from './components/Profile/Changepassword';
import Navigation from './components/Navigation';
import Transactions from './components/Transaction/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionsDisplay from './components/Transaction/TransactionsDisplay';
import './App.css';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
// import TransactionsDisplay from './components/Transaction/TransactionsDisplay';

function App() {
  const [user, setUser] = useState({});
  const [signinError, setSigninError] = useState('');
  const [signupErrors, setSignupErrors] = useState([]);


    
  function signUp (user) {
    fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/users`, {
    // fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.errors) {
        
        setSignupErrors(jsonResponse.errors);
        console.log(jsonResponse.errors);
      }
      else {
        console.log("WORKING")
        setUser(jsonResponse);
        
      }
    })
  }

  function signIn (user) {
    fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if (result.token) {
        localStorage.setItem('token', result.token);
        setUser(result.user);
       
       
        
      } else {
        setSigninError(result.error)
        
      }
    })

  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/profile`, {
      // fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {  
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if (result.id) {
          setUser(result)
        }
      })
    }
  }, []);


  return (
    <div className="App">



          <Navigation />
         
            <Routes>
              
              <Route path='/' element={<Home />} />
              <Route path='signup' element={<SignUp signUp={signUp} errors = {signupErrors}/>} />
              <Route path='categories' element={<Category />} />
              <Route path='profile' element={<Profile />} />
              <Route path='profile/edit' element={<ProfileUpdate />} />
              <Route path='profile/changepassword' element={<Changepassword />} />
              <Route path="transactions" element={<TransactionsDisplay/>} />
            </Routes>
         
          
        
    </div>
);
}
export default App;