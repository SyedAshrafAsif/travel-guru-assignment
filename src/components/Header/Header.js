import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../../image/logo.png';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="90"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Travel Guru logo"
                    />
                </Navbar.Brand>                
                <Nav className="mr-auto">
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#destination">Destination</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />    
                    <Button style={{backgroundColor: '#F9A51A', borderRadius: '5px'}}>Login</Button>
                </Form>                
            </Navbar>
        </div>
    );
};

export default Header;