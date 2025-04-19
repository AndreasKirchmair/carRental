import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

export default function () {
    return (
        <Navbar expand="sm" className="bg-body-tertiary" style={{marginBottom: "10px"}}>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                    <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};