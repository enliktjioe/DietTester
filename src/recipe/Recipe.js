import * as React from "react";
import './Recipe.css'
import {Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NavBar from "../navbar/NavBar";

export class Recipe extends React.Component {

    render() {
        return (
            <div id="recipe-container">
                <div id="recipe">
                    <h1>
                        Lentil bolognese
                    </h1>
                    <Alert variant="success">
                        Recipe goes here
                    </Alert>
                    <Button href="/diet-plan" variant="outline-info" size="lg" block>To diet plan</Button>
                </div>
            </div>
        )
    }
}

export default Recipe;
