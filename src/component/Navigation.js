import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Navigation(props) {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand>React-Redux Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ marginLeft: '20px' }}>
                    <Nav.Link><Link style={{ marginLeft: '20px' }} to="/products">Products</Link></Nav.Link>
                    <Nav.Link><Link style={{ marginLeft: '20px' }} to="/cart">Cart <Badge bg="primary" style={{ color: 'white' }}>{props.mycounter.length}</Badge></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


const mapStateToProps = (state) => {
    return { mycounter: state.cart }
}

export default connect(mapStateToProps)(Navigation)