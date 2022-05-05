import React, {useState} from 'react'
import SignIn from './Authentication/SignIn';
import {Button} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Home() {
    const [user, setUser] = useState({});
    const [signinError, setSigninError] = useState('');
    let navigate = useNavigate();
    // const authenticate = () => {
    //     let token = localStorage.getItem('token')
    //     if (token) {
    //         fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/profile`, {
    //         // fetch('http://localhost:3000/profile', {
    //             method: 'GET',
    //             headers: {  
    //             'Authorization': `Bearer ${token}`
    //             }
    //             })
    //         .then(response => response.json())
    //         .then(result => {
    //         if (result.id) {
    //             setUser(result)
    //         }
    //     })
    //     }
    // }

    // const logout = () => {
    //         localStorage.removeItem('token')
    //         setUser({})
    //     }
  

    const signIn =  (user) => {
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
            console.log("TESTddddd")
            
          } else {
            setSigninError(result.error)
          }
        })
      }

    //   const signIn = () => {
    //     let token = localStorage.getItem('token')
    //     if (token) {
    //         fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/profile`, {
    //         // fetch('http://localhost:3000/profile', {
    //             method: 'GET',
    //             headers: {  
    //             'Authorization': `Bearer ${token}`
    //             }
    //             })
    //         .then(response => response.json())
    //         .then(result => {
    //         if (result.id) {
    //             setUser(result)
    //         }
    //     })
    //     }
    // }
  
  
    return (
    <div> 
        <SignIn signIn={signIn} error={signinError} />
        <h2>Not a member, why not sign up?</h2>
        <Button variant="secondary" href="/signup">Sign Up</Button>
    </div>
  )
}

export default Home