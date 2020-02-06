import * as React from "react";
import Media from "react-bootstrap/Media";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

export class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <NavBarLoggedIn/>
                <Media>
                    <Media.Body>
                        <h2>Shopping list</h2>
                    </Media.Body>
                </Media>

                <Container>
                    <Row>
                        <Col sm>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="info" eventKey="0">
                                        Tomato
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Musshrooms!</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Onioons?</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col sm>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Fruit
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Mushrooms"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Apples</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Onions"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Oranges</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Where is the lamb sauce?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Soy sauce"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Soy for
                                                    sauce!</InputGroup.Text> </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Coconut Oil"/>
                                                </InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Cocolnut
                                                    oilves?</InputGroup.Text> </InputGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default ShoppingList;
