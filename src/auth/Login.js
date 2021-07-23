import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import APIURL from '../helpers/environment'


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  

    const formWrapper = {
     
        padding: '15px',
        backgroundColor: '#545C13',
        color: 'white',
        textAlign: 'center',
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json())
    
        .then ((data) => {
            console.log(data)
         
            if (data.message !== "User successfully logged in!") {
                alert(data.message)
            } else {
            props.updateToken(data.sessionToken)}
         })
    }
    return (
        <div style={formWrapper}>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor = "username">Username</Label>
                    <Input onChange={(e) => 
                    {setUsername(e.target.value) 
                       
                    }} name="username"/>
                 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password}/>
                </FormGroup>
                <br></br>
                <Button type="submit" disabled={password.length !==0 && username.length !==0 ? false : true}>Login</Button>
                    
            </Form>
        </div>
    )

}

export default Login;