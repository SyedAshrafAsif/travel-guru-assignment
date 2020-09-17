import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../../image/whiteLogo.png';
const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="80"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Travel Guru logo"
                    />
                </Navbar.Brand>                
                <Nav className="mr-auto">
                <Nav.Link href="#news"><span style={{color: "white"}}>News</span></Nav.Link>
                <Nav.Link href="#destination"><span style={{color: "white"}}>Destination</span></Nav.Link>
                <Nav.Link href="#blog"><span style={{color: "white"}}>Blog</span></Nav.Link>
                <Nav.Link href="#contact"><span style={{color: "white"}}>Contact</span></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl style={{background: "rgba(255, 255, 255, 0.2)" }} type="text" placeholder="Search your destination" className="mr-sm-2"/>    
                    <Button style={{backgroundColor: '#F9A51A', borderRadius: '5px'}}>Login</Button>
                </Form>                
            </Navbar>
        </div>
    );
};

export default Header;