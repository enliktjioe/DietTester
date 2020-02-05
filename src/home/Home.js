import * as React from "react";
import Alert from "react-bootstrap/Alert";
import {Button} from "react-bootstrap";
import {useState} from "react";

import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export class Home extends React.Component {

    render() {
        return (

            <div id="home-container">
                {/* <AlertDismissibleExample/> */}
                <CallToAction href='./logged-in-home'>Get Started</CallToAction>
                <Button variant="outline-primary" size="lg" href="./logged-in-home" block>
                    Vajuta siia, et sisse logida
                </Button>
            </div>
        )
    }
}

export default Home;
