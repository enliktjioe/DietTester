import * as React from "react";
import './Recipe.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavBarLoggedIn from "../navbarloggedin/NavBarLoggedIn";

export class Recipe extends React.Component {

    render() {
        return (
            <div id="recipe-container">
                <NavBarLoggedIn/>
                <div id="recipe">
                    <h1>
                        Lentil stroganoff (Oil-free, GF)
                    </h1>
                    <Card border="info">
                        <Card.Header>Ingredients</Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                    <Button href="/diet-plan" variant="outline-info" size="lg" block>To diet plan</Button>
                </div>
            </div>
        )
    }
}

export default Recipe;
