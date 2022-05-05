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
        event.preventDefault();
        props.signIn(state);
    }
        



    return (
        <div className="col-md-4 offset-md-4 bg-light p-3">
            <h3 className="bg-light">Sign In</h3>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="signinEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control type='email' name='email' value={state.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signinPassword">
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

