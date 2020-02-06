import * as React from "react";
import { MDBSelect } from "mdbreact";
import Media from "react-bootstrap/Media";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <header></header>
                <body>
                <Media>
                    <Media.Body>
                        <h2 style={{textAlign: "center"}}>Shopping list</h2>
                    </Media.Body>
                </Media>

                <Container>
                    <Row>
                        <Col sm>
                        <Accordion>
                            <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        Vegetables
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Tomatoes" />
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Tomatoes</InputGroup.Text>                                </InputGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Onions" />
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Onioons?</InputGroup.Text>                                </InputGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </Col>
                        <Col sm></Col>
                        <Col sm>
                        <Accordion>
                            <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                        Fruits
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Apples" />
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Apples</InputGroup.Text>                                </InputGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Pears" />
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Pears</InputGroup.Text>                                </InputGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                </Accordion>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                        <Accordion>
                            <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        Cereals
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Rice" />
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Rice</InputGroup.Text>                                </InputGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Coconut Oil" />
                                            </InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Oat</InputGroup.Text>                                </InputGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 8 }}>
                            <Button style={{width: '350px'}} href="./shopping-list" variant="outline-info" size="lg" block>DONE</Button>
                        </Col>
                    </Row>
                </Container>
                </body>

            </div>

);
}
}
    export default ShoppingList;
