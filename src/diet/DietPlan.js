import * as React from "react";
import './DietPlan.css'
import {Alert} from "react-bootstrap";

export class DietPlan extends React.Component {

    render() {
        return (
            <div id="diet-plan-container">
                <div id="diets">
                    <h1>
                        Vegan
                    </h1>
                    <Alert variant="success">
                        Siin on toitumiskava
                    </Alert>
                </div>
            </div>
        )
    }
}

export default DietPlan;
