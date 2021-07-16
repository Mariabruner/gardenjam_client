import React, {useState} from 'react';
import {Collapse, Navbar, NavLink, NavbarToggler, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return (
        <Navbar color="success" light expand="md">
            <NavbarBrand href="/">Gardenjam</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='m1-auto' navbar>
                   <NavItem>
                        <NavLink href="HOME">Home</NavLink>
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