import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  

 

    const formWrapper = {
        border: '1px solid black',
        borderRadius: '1em',
        padding: '10px',
        backgroundColor: '#545C13',
        color: 'white',
        textAlign: 'center',
        boxShadow: '5px 10px #D6C66C'      
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json())
    
        .then ((data) => {
            console.log(data)
         
            if (data.message != "User successfully logged in!") {
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
                <Button type="submit" disabled={password.length !=0 && username.length !=0 ? false : true}>Login</Button>
                    
            </Form>
        </div>
    )

}

export default Login;