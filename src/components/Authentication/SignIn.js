import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';

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
        <div className="col-md-4 offset-md-4 bg-light p-3">
            <h3 className="bg-light">Sign In</h3>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3">
                <Form.Label>Email: </Form.Label>
                <Form.Control type='email' name='email' value={state.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Password: </Form.Label>
                <Form.Control type='password' name='password' value={state.password} onChange={handleChange} />
                </Form.Group>

                {props.error ? <p class="form-errors">{props.error}</p> : null}

                <Button variant="secondary" type="submit">
                Sign In
                </Button>
                
            </Form>
        </div>
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