import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="#home">Diet Tester</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="./home">Home</Nav.Link>
                                <Nav.Link href="#link">Food Plans</Nav.Link>
                            </Nav>
                            <Nav inline>
                                <Nav.Link inline href="./logged-in-home">Log In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        )
    }
}

export default NavBar;
