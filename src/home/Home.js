import * as React from "react";
import Alert from "react-bootstrap/Alert";
import {Button} from "react-bootstrap";

export class Home extends React.Component {

    render() {
        return (
            <div id="home-container">
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr/>
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert>
                <Button variant="outline-primary" size="lg" href="./logged-in-home" block>
                    Vajuta siia, et sisse logida
                </Button>
            </div>
        )
    }
}

export default Home;
