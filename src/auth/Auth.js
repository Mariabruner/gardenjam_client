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
        justifyContent: 'space-around',
        margin: '10px',
        backgroundColor: '#545C13',
        borderRadius: '5px',
        color: 'white'

    }

    const buttonStyle = {
        margin: '5px',
        backgroundColor: 'white'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    const modalStyle = {
        textAlign: 'center',
    }

    return (
        <Modal isOpen={modal} toggle={toggle} className="auth-container">

            <ModalHeader toggle={toggle} style={modalStyle}> Welcome! Please sign up or log in to get started. </ModalHeader>
        

            <Router>
                <Switch>

                    <Route path="/signup"><Signup updateToken={props.updateToken}/></Route>
                    <Route path="/login"><Login updateToken={props.updateToken}/></Route>
                </Switch>

                <div style={buttonDiv}>

                    <Button style={buttonStyle}><Link style={linkStyle} to='/Signup'>Sign Up</Link></Button>
                    <Button style={buttonStyle}><Link style={linkStyle} to='/Login'>Already have an account? Log in.</Link></Button>
                </div>



            </Router>

        </Modal>
    )
}



export default Auth;