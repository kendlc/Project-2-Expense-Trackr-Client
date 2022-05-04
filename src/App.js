
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
// import TransactionsDisplay from './components/Transaction/TransactionsDisplay';

function App() {
  const [user, setUser] = useState({});
  const [signinError, setSigninError] = useState('');
  const [signupErrors, setSignupErrors] = useState([]);


  function signUp (user) {
    fetch('http://localhost:3000/users', {
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
        console.log(jsonResponse.errors)
      }
      else {
        setUser(jsonResponse)
      }
    })
  }

  function signIn (user) {
    fetch('http://localhost:3000/login', {
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
        localStorage.setItem('token', result.token)
        setUser(result.user)
      } else {
        setSigninError(result.error)
      }
    })
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/profile', {
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
      {user.email ?
        (<>
          <h2>Welcome, {user.first_name}</h2>
          <button onClick={() => {
            localStorage.removeItem('token')
            setUser({})
          }} >Log Out</button>
        </>) :
        (<>
          <SignIn signIn={signIn} error={signinError} />
          <SignUp signUp={signUp} errors = {signupErrors}/>
        </>)
      }
    </div>
);
}
export default App;