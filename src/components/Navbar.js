import React, {useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';


import { withRouter } from 'react-router-dom';
import {Collapse, Navbar, NavLink, NavbarToggler, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import Home from './Home'

const Sitebar = (props) => {

    const sitebarStyle ={
        backgroundColor: '#545C13',
       
    }

    const navBarBrandStyle = {
        color: 'white'
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <Navbar style={sitebarStyle}  light expand="md">
            <NavbarBrand style={navBarBrandStyle} href="/">Gardenjam</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='m1-auto' navbar>
                <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">LINK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">LINK</NavLink>
                    </NavItem>
                    <NavItem class="logout">
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;