import * as React from "react";
import './LoggedInHome.css'
import Button from "react-bootstrap/Button";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";
import {Card, CardDeck} from "react-bootstrap";

export class LoggedInHome extends React.Component {

    render() {
        return (
            <div id="logged-in-home-container">
                <NavBarLoggedIn/>
                <div id="diets">
                    <h1>
                        Pick a new diet to try
                    </h1>
                    <div className="margin-6vh">
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Vegan</Card.Title>
                                    <Card.Text>
                                        Blablabla veganism rules
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <Button href="./menu" variant="outline-info" size="sm">Go
                                        vegan</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Vegetarian</Card.Title>
                                    <Card.Text>
                                        Blablabla veganism rules
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-info" size="sm" disabled>Go vegetarian</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ketogenic</Card.Title>
                                    <Card.Text>
                                        Blablabla veganism rules
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-info" size="sm" disabled>Go ketogenic</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>

                        <hr/>

                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Macrobiotic</Card.Title>
                                    <Card.Text>
                                        Blablabla veganism rules
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-info" size="sm" disabled>Go macrobiotic</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Low Sugar</Card.Title>
                                    <Card.Text>
                                        Blablabla veganism rules
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-info" size="sm" disabled>Go low sugar</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Go paleo</Card.Title>
                                    <Card.Text>
                                        Blablabla veganism rules
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-info" size="sm" disabled>Go paleo</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedInHome;
