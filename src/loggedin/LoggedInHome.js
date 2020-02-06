import * as React from "react";
import './LoggedInHome.css'
import Button from "react-bootstrap/Button";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

export class LoggedInHome extends React.Component {

    render() {
        return (
            <>
                <div id="logged-in-home-container">
                    <NavBarLoggedIn/>
                    <div id="diets">
                        <h1>
                            Pick a new diet to try
                        </h1>
                        <div className="margin-6vh">
                            <Button href="./menu" variant="outline-info" size="lg" block>Vegan</Button>
                            <hr/>
                            <Button variant="outline-info" size="lg" block disabled>Vegetarian</Button>
                            <hr/>
                            <Button variant="outline-info" size="lg" block disabled>Ketogenic</Button>
                            <hr/>
                            <Button variant="outline-info" size="lg" block disabled>Macrobiotic</Button>
                            <hr/>
                            <Button variant="outline-info" size="lg" block disabled>Low sugar</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoggedInHome;
