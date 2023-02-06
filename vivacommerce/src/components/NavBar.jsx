import React from 'react'
import CartWidget from './CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
        
        <Navbar bg="dark" variant="dark">
                <Container>
                
                    
                    <Navbar.Brand href="#nombre">Vivacommerce</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#usuarios">Usuarios</Nav.Link>
                            <Nav.Link href="#areas">Areas</Nav.Link>
                            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                            <Nav.Link href="#nosotros">Quienes Somos</Nav.Link>
                            <Navbar.Collapse className="justify-content-end me-auto">
                                <NavDropdown title="Sedes" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Bello</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Bolivia</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Envigado</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Estadio</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Guayabal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Poblado</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Prado</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">Punto Clave</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.9">Villanueva</NavDropdown.Item>                    
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Nav>
                    
                        <CartWidget/>
                </Container>
            
        </Navbar>
        </>
    );
}

export default ColorSchemesExample;