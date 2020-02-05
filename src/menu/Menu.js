import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import Button from "react-bootstrap/Button";

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="#home">Diet Tester</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="./home">Home</Nav.Link>
                                <Nav.Link href="/diet-plan">Food Plans</Nav.Link>
                            </Nav>
                            <Nav inline>
                                <Nav.Link inline href="./logged-in-home">Log In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                <body>
                    <h1>7-Day menu</h1>
                    <Carousel style={{padding: '20px', width: '1400px', maxWidth: '1400px', margin: 'auto'}}>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>07.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>08.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>09.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Jumbotron>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>08.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>09.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>10.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Jumbotron>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>09.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>10.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>11.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Jumbotron>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>10.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>11.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>12.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Jumbotron>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>11.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>12.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>13.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Jumbotron>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>12.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>13.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>14.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Jumbotron>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Jumbotron style={{backgroundColor: 'black', width: '1300px', maxWidth: '1300px', margin: 'auto'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>13.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>14.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '20rem', maxWidth: '20rem', margin: 'auto'}}>
                                                <Card.Body>
                                                    <Card.Title>15.02.2020</Card.Title>
                                                    <Card.Text>
                                                        <h4>Breakfast</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Lunch</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Afternoon</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                        <h4>Snack</h4>
                                                        <p>
                                                            <div>
                                                                <b>Name</b>
                                                            </div>
                                                            <div>
                                                                Ingredients
                                                            </div>
                                                            <div>
                                                                How to do it?
                                                            </div>
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Jumbotron>
                        </Carousel.Item>
                    </Carousel>
                    <p>
                        <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="#Export" variant="outline-info" size="lg" block>Sync with calendar</Button>
                    </p>
                    <p>
                        <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./shopping-list" variant="outline-info" size="lg" block>Confirm</Button>
                    </p>
                </body>
            </div>
        );
    }
}

export default Menu;