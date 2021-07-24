import React from 'react';
import { useState } from 'react'
import { Container, Row, Col, Modal, ModalHeader, Button } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"



const Auth = (props) => {
    const [modal, setModal] = useState(true)
    const toggle = () => setModal(!modal)
   

    const buttonDiv = {
        display: "flex",
        justifyContent: 'center',
        // margin: '10px',
        backgroundColor: '#545C13',
        // borderRadius: '5px',
        color: 'white'

    }

    const buttonStyle = {
        margin: '5px',
        backgroundColor: '#9D9C75'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    const modalStyle = {
        display: "flex",
        justifyContent: 'center',
        backgroundColor: '#9D9C75'
    }

    return (
        <Modal isOpen={modal} toggle={toggle} className="auth-container" backdrop="static">

            <ModalHeader style={modalStyle}>Welcome! Please sign up or log in to get started.</ModalHeader>
        

            <Router>
                <Switch>

                    <Route path="/signup"><Signup updateToken={props.updateToken}/></Route>
                    <Route path="/login"><Login updateToken={props.updateToken}/></Route>
                </Switch>

                <div style={buttonDiv}>

                    <Button style={buttonStyle}><Link style={linkStyle} to='/Signup'>Sign-up Form</Link></Button>
                    <Button style={buttonStyle}><Link style={linkStyle} to='/Login'>Already have an account? Log in.</Link></Button>
                </div>



            </Router>

        </Modal>
    )
}



export default Auth;