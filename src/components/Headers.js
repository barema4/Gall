import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Headers() {
    return (
        
            <header>
                    <Navbar bg="dark" variant ="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to='/'>
                        <Navbar.Brand>Galler Pro</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >   
                                <LinkContainer to='/cart'>
                                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                <Nav.Link><i className="fas fa-person"></i>Login</Nav.Link>
                                </LinkContainer>
                                {/* <Nav.Link href="#" disabled>
                                Link
                                </Nav.Link> */}
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </header>
        
    )
}

export default Headers
