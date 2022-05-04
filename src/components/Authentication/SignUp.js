import React, {useState} from "react";
import './SignUp.css';

function SignUp(props) {
  
    const [state, setState] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
    })
    
    // dynamic function
    const handleChange = (event) => {
        // setState({[event.target.name]: event.target.value})
        setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

   
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.signUp(state)
    }

    console.log(props.errors)
  
    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>

            <label>Email: </label>
            <input name='email' type='email' value={state.email} onChange={handleChange} />

            <label>Name: </label>
            <input name='first_name' value={state.first_name} onChange={handleChange} />

            <label>Surname: </label>
            <input name='last_name' value={state.last_name} onChange={handleChange} />

            <label>Password: </label>
            <input name='password' type='password' value={state.password} onChange={handleChange} />

            <label>Password: </label>
            <input name='password_confirmation' type='password' value={state.password_confirmation} onChange={handleChange} />

            <input type='submit' value='Register' />

        {props.errors ? 
            <ul className = "form-errors"> {props.errors.map((error) => (
                <li key={error.id}>{error.title}</li>
                ))}
            </ul> 
        : null}
    </form>
);
}

export default SignUp


// import React, {Component} from 'react'
// import './SignUp.css';

// class SignUp extends Component {
//     // doesn't need constructor because doesnt use the inicial state
//     state = {
//         email: '',
//         first_name: '',
//         last_name: '',
//         password: '',
//         password_confirmation: ''
//     }

//     // dynamic function
//     handleChange = (event) => {
//         this.setState({[event.target.name]: event.target.value})
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.signUp(this.state)
//     }
    
//     render() {
       
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <h1>Sign Up</h1>

//                 <label>Email: </label>
//                 <input name='email' value={this.state.email} onChange={this.handleChange} />

//                 <label>Name: </label>
//                 <input name='first_name' value={this.state.first_name} onChange={this.handleChange} />

//                 <label>Surname: </label>
//                 <input name='last_name' value={this.state.last_name} onChange={this.handleChange} />

//                 <label>Password: </label>
//                 <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />

//                 <label>Password: </label>
//                 <input name='password_confirmation' type='password' value={this.state.password_confirmation} onChange={this.handleChange} />

//                 <input type='submit' value='Register' />

//                 {this.props.errors ? 
//                     <ul className = "signup-form-errors"> {this.props.errors.map((error) => (
//                         <li key={error.id}>{error.title}</li>
//                         ))}
//                     </ul> 
//                 : null}
//             </form>
//         );
//     }
// }

// export default SignUp;