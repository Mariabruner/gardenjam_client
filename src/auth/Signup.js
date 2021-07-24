
import { findByLabelText } from '@testing-library/react';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import APIURL from '../helpers/environment'

const Signup = (props) => {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);



    const formWrapper = {

        padding: '15px',
        backgroundColor: '#545C13',
        color: 'white',
        textAlign: 'center',


    }

    const feedBackStyle = {
        color: 'black'
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            if (data.message === "Username already in use") {
                alert(data.message)
            }
            if (data.message === "Failed to register user") {
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
                        const re = /^(?=.*[0-9|!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/

                        if (re.test(e.target.value)) {
                            setUsernameValid(true)
                        } else {
                            setUsernameValid(false)
                        }

                        // if (e.target.value.length >= 4 && (e.target.value.includes ("0") || e.target.value.includes("1") || e.target.value.includes ("!") || e.target.value.includes ("%") || e.target.value.includes ("^") || e.target.value.includes ("*") || e.target.value.includes ("&")))
                        //      {
                        //     setUsernameValid(true)
                        // } else {
                        //     setUsernameValid(false)
                        // }
                    }
                    }
                        name="username" value={username} />
                    <FormFeedback style={feedBackStyle} invalid>
                        {'Username must be at least 4 characters and include either a digit or a special character (!, @, #, $, %, ^, &, *)'}
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
                    {<FormFeedback style={feedBackStyle}>
                        {confirmPassword.length === 0
                            ?
                            'Please confirm your password'
                            :
                            confirmPassword !== password
                                ?
                                'Passwords do not match'
                                :
                                null}
                    </FormFeedback>}



                </FormGroup>
                <br></br>

                <Button type="submit" disabled={usernameValid && passwordValid && confirmPasswordValid ? false : true}>Submit</Button>
            </Form>
        </div>
    )
}

export default Signup;