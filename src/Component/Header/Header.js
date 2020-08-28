import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div className ="Heading">
            <h1>Online Class</h1>
            <Navbar bg="dark" variant="dark">
            
                <Nav className="mr-auto">
                <Nav.Link style= {{"marginLeft":'50px'}} href="#about">About Us</Nav.Link>
                <Nav.Link style= {{"marginLeft":'50px'}} href="#courses">Courses</Nav.Link>
                <Nav.Link style= {{"marginLeft":'50px'}} href="#contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
           
        </div>
    );
};

export default Header;