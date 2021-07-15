import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
        <Container className="auth-container">
      
            <h1> Welcome! Please sign up or log in to get started. </h1>
            <br></br>
            <Row>
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