import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
const authStyle = {
    display: 'flex',
    justifyContent: 'center'
}
const headerStyle = {
    display: 'flex',
    justifyContent: 'center'
}
    return (
        <Container className="auth-container" >
      
            <h1 style={headerStyle}> Welcome! Please sign up or log in to get started. </h1>
            <br></br>
            <Row style={authStyle}>
                <Col md="4">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="4" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;