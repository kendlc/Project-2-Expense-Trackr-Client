
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import Category from './components/Category/Category';
import Profile  from './components/Profile/Profile';
import ProfileUpdate from './components/Profile/ProfileUpdate';
import Changepassword from './components/Profile/Changepassword';
import Navigation from './components/Navigation';
import SignUp from './components/Authentication/SignUp';
import TransactionsDisplay from './components/Transaction/TransactionsDisplay';
import NewTransaction from './components/Transaction/NewTransaction';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});
  const [signinErrors, setSigninErrors] = useState([]);

  const [signupErrors, setSignupErrors] = useState([]);
  const navigate = useNavigate();

  const signIn = (user) => {
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
        localStorage.setItem('token', result.token)
        setUser(result.user);
        navigate("/transactions", { replace: true });
      } else {
        setSigninErrors(result.error)
      }
    })
  }


const signUp = (user) => {
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
        console.log(jsonResponse.errors)
      }
      else {
        setUser(jsonResponse)
        signIn(user);
        // navigate("/", { replace: true });
      }
    })
  }

  return (
    
    <div className="App">
          <Navigation />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='signup' element={<SignUp signUp={signUp} errors={signupErrors}/>} />
              <Route path='categories' element={<Category />} />
              <Route path='profile' element={<Profile />} />
              <Route path='profile/edit' element={<ProfileUpdate />} />
              <Route path='profile/changepassword' element={<Changepassword />} />
              <Route path="transactions" element={<TransactionsDisplay/>} />
              <Route path="newtransaction" element={<NewTransaction/>} />
            </Routes>
    </div>
  );
}
export default App