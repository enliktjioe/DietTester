import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Diet Tester</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="./home">Home</Nav.Link>
                                <Nav.Link href="/diet-plan">Food Plans</Nav.Link>
                                <Nav.Link href="/daily-survey">Daily Survey</Nav.Link>
                            </Nav>
                            <Nav inline>
                                <Nav.Link inline href="./logged-in-home">Log In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default NavBar;
