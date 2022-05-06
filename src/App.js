import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation'
import AnimatedRoutes from './components/AnimatedRoutes'
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
      }
    })
  }

  return (
    <div className="App">
          <Navigation />
          <AnimatedRoutes signUp={signUp} errors={signupErrors} />
    </div>
  );
}

export default App;