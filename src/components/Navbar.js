import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Navbar.css'

import { withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavLink, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import Home from './Home'
import ParksApp from './apps/ParksApp';

const Sitebar = (props) => {

    const sitebarStyle = {
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
        <div>
            <Navbar className="navbar" style={sitebarStyle} light expand="md">
                <NavbarBrand style={navBarBrandStyle} href="/">National Parkopedia</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='m1-auto' navbar>
                        <NavItem>
                            <NavLink><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/apps/ParkAppDisplay.js"><Link to="/parks">Parks</Link> </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Forum</NavLink>
                        </NavItem>
                        <NavItem class="logout">
                            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <div>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/parks"><ParksApp /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sitebar;