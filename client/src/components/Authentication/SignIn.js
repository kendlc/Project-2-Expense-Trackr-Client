import React, {useState} from "react";

function SignIn(props) {

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    // dynamic function
    const handleChange = (event) => {
        // setState({[event.target.name]: event.target.value})
        setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.signIn(state)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>

            <label>Email: </label>
            <input type='email' name='email' value={state.email} onChange={handleChange} />

            <label>Password: </label>
            <input type='password' name='password' value={state.password} onChange={handleChange} />

            {props.error ? <p class="form-errors">{props.error}</p> : null}

            <input type='submit' value='Sign In' />
            
        </form>
    )
}
export default SignIn

// class SignIn extends Component {
//     // doesn't need constructor because doesnt use the inicial state
//     state = { 
//         email: '',
//         password: ''
//     }

//     // dynamic function
//     handleChange = (event) => {
//         this.setState({[event.target.name]: event.target.value})
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.signIn(this.state)
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <h1>Sign In</h1>

//                 <label>Email: </label>
//                 <input name='email' value={this.state.email} onChange={this.handleChange} />

//                 <label>Password: </label>
//                 <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />

//                 {this.props.error ? <p>{this.props.error}</p> : null}

//                 <input type='submit' value='Sign In' />
//             </form>
//         );
//     }
// }

// export default SignIn