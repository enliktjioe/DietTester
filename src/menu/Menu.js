import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import Breakfast1 from "../resources/breakfast1.png"
import Image from "react-bootstrap/Image";

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <NavBarLoggedIn/>
                <h1>7-Day meal plan</h1>
                <Card border="success" style={{ width: '1200px', maxWidth: '1200px', margin: 'auto'}}>
                    <Card.Body>
                        <Card.Title>Fact about being a vegan</Card.Title>
                        <Card.Text>
                            The fact
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Carousel style={{padding: '25px', width: '1500px', maxWidth: '1500px', margin: 'auto'}}>
                    <Carousel.Item>
                            <Container style={{width: '1200px', maxWidth: '1200px', margin: 'auto'}}>
                                <Row>
                                    <Col>
                                        <Card border="success">
                                            <Card.Body>
                                                <Card.Title style={{textAlign: 'center'}}>07.02.2020</Card.Title>
                                                <Card.Text>
                                                    <Card border="success">
                                                        <Card.Body>
                                                            <Container>
                                                                <Row>
                                                                    <Col style={{ width: '9rem' }}>
                                                                        <Card.Title>Chive waffles with maple & soy mushrooms</Card.Title>
                                                                    </Col>
                                                                    <Col style={{ width: '8rem' }}>
                                                                        <Image style={{width: '110px', height: '110px'}} src={Breakfast1} roundedCircle />
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col style={{ width: '9rem' }}>
                                                                        <Card.Text>
                                                                            Time to make: 45 min
                                                                        </Card.Text>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card border="success" style={{marginTop: '15px'}}>
                                                        <Card.Body>
                                                            <Container>
                                                                <Row>
                                                                    <Col style={{ width: '9rem' }}>
                                                                        <Card.Title>Chive waffles with maple & soy mushrooms</Card.Title>
                                                                        <Card.Text>
                                                                            Time to make: 45 min
                                                                        </Card.Text>
                                                                    </Col>
                                                                    <Col style={{ width: '8rem' }}>
                                                                        <Image style={{width: '90px', height: '90px'}} src={Breakfast1} roundedCircle />
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card border="success" style={{marginTop: '15px'}}>
                                                        <Card.Body>
                                                            <Container>
                                                                <Row>
                                                                    <Col style={{ width: '9rem' }}>
                                                                        <Card.Title>Chive waffles with maple & soy mushrooms</Card.Title>
                                                                        <Card.Text>
                                                                            Time to make: 45 min
                                                                        </Card.Text>
                                                                    </Col>
                                                                    <Col style={{ width: '8rem' }}>
                                                                        <Image style={{width: '90px', height: '90px'}} src={Breakfast1} roundedCircle />
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card border="success">
                                            <Card.Body>
                                                <Card.Title>08.02.2020</Card.Title>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card border="success" >
                                            <Card.Body>
                                                <Card.Title>09.02.2020</Card.Title>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                            <Carousel.Caption>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                </Carousel>
                <p>
                    <Container style={{width: '290px', maxWidth: '290px', margin: 'auto'}}>
                        <Form>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Sync my meal plan with calendar"/>
                            </Form.Group>
                        </Form>
                    </Container>
                </p>
                <p>
                    <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./shopping-list" variant="outline-success" size="lg" block>Get my shopping list</Button>
                </p>
                <p>
                    <Button style={{width: '400px', maxWidth: '400px', margin: 'auto'}} href="./logged-in-home" variant="outline-danger" size="lg" block>Cancel</Button>
                </p>
            </div>
        );
    }
}

export default Menu;