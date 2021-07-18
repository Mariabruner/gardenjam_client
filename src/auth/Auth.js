import React from 'react';
import {useState } from 'react'
import { Container, Row, Col, Modal, ModalHeader } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';



const Auth = (props) => {
    const [modal, setModal] = useState(true)
    const toggle = () => setModal(!modal)

    return (
        <Modal isOpen={modal} toggle={toggle} className="auth-container">
      
            <ModalHeader toggle={toggle}> Welcome! Please sign up or log in to get started. </ModalHeader>
            <br></br>
            <Row>
                <Col md="4">
                    <Signup onClick={toggle} updateToken={props.updateToken}/>
                </Col>
                <Col md="4" className="login-col">
                    <Login onClick={toggle} updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Modal>
    )
}

export default Auth;