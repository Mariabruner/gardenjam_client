
import { findByLabelText } from '@testing-library/react';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  

    const formWrapper = {
        border: '1px solid black',
        borderRadius: '1em',
        padding: '10px',
        backgroundColor: '#545C13',
        color: 'white',
        textAlign: 'center',
        boxShadow: '5px 10px #D6C66C'
     
    }

    const feedBackStyle ={
        color: 'black'
    }
 

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            if (data.message === "Username already in use" ){
                alert(data.message)
            }
            if (data.message === "Failed to register user" ){
                alert(data.message)
            }
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div style={formWrapper} id='formWrapper'>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username" >Username</Label>
                    <Input valid={usernameValid} invalid={!usernameValid} onChange={(e) => {
                        setUsername(e.target.value)
                        if (e.target.value.length >= 4 && (e.target.value.includes ("@") || e.target.value.includes ("#") || e.target.value.includes ("$") || e.target.value.includes ("!") || e.target.value.includes ("%") || e.target.value.includes ("^") || e.target.value.includes ("*") || e.target.value.includes ("&")))
                             {
                            setUsernameValid(true)
                        } else {
                            setUsernameValid(false)
                        }


                    }} name="username" value={username} />
                    <FormFeedback style={feedBackStyle} invalid>
                        {'Username must be at least 4 characters and include a special character (@, #, $, %, ^, &, *, !)'}
                    </FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input valid={passwordValid} invalid={!passwordValid} onChange={(e) => {
                        setPassword(e.target.value)
                        if (e.target.value.length >= 5) {
                            setPasswordValid(true);
                        } else {
                            setPasswordValid(false);
                        }
                        if (confirmPassword !== e.target.value || confirmPassword.length === 0) {
                            setConfirmPasswordValid(false);
                        } else {
                            setConfirmPasswordValid(true);
                        }

                    }} name="password" type="password"
                    value={password} />
                    <FormFeedback style={feedBackStyle} invalid>
                        {'Password must be at least 5 characters'}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input invalid={!confirmPasswordValid} valid={confirmPasswordValid} onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        if (password === e.target.value && e.target.value.length !== 0) {
                            setConfirmPasswordValid(true);
                        } else if (confirmPassword !== password) {
                            setConfirmPasswordValid(false);
                        } else {
                            setConfirmPasswordValid(false);
                        }
                    }} name="confirmPassword" type="password" value={confirmPassword} /> 
                    { <FormFeedback style={feedBackStyle}>
                        {confirmPassword.length === 0
                            ?
                            'Please confirm your password'
                            :
                            confirmPassword !== password
                                ?
                                'Passwords do not match'
                                :
                                null}
                    </FormFeedback> }



         </FormGroup>

                <Button type="submit" disabled={usernameValid && passwordValid && confirmPasswordValid ? false : true}>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;