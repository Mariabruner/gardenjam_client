import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, BrowserRouter as Router, useLocation, Redirect } from 'react-router-dom';
import './Navbar.css'


import { Collapse, Navbar, NavLink, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

import Auth from '../auth/Auth'
import Home from './Home'
import ParksApp from './apps/ParksApp';
import Forum from './Forum'

const Sitebar = (props) => {
    const [sessionToken, setSessionToken] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'))
        }
    }, [])

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
       
    }

    function ProtectedRoute({ children, ...rest }) {
        return (
            <Route {...rest} render={() => {
                return sessionToken === localStorage.getItem('token') ? children
                    : <Auth updateToken={updateToken} />
            }} />)
    }

    const sitebarStyle = {
        backgroundColor: '#545C13',
    }

    const navBarBrandStyle = {
        color: 'white'
    }

    const navLinkStyle = {
        textDecoration: "none",
        fontFamily: 'Cabin Sketch',
        color: 'white'
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <div>
            <Navbar className="navbar" style={sitebarStyle} sticky="top" light expand="md">
                <NavbarBrand style={navBarBrandStyle} href="/">National Parkopedia</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='m1-auto' navbar>
                        <NavItem>
                            <NavLink ><Link style={navLinkStyle} to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/apps/ParkAppDisplay.js"><Link style={navLinkStyle} to="/parks"> Parks</Link> </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link style={navLinkStyle} to="/forum">Forum</Link></NavLink>
                        </NavItem>
                        <NavItem class="logout">
                            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div>
                <Switch>
                    <ProtectedRoute exact path="/"><Home /></ProtectedRoute>
                    <ProtectedRoute exact path="/parks"><ParksApp /></ProtectedRoute>
                    <ProtectedRoute exact path="/forum"><Forum /></ProtectedRoute>
                </Switch>
            </div>
        </div>
    )
}

export default Sitebar;