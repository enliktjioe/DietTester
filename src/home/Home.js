import * as React from "react";
import {Button, Container} from 'react-bootstrap';
import {Heading} from 'rebass'
import NavBar from "../navbar/NavBar";
import "./Home.css";

export class Home extends React.Component {
    state = {showSideNav: false};

    handleSideNavToggle = () => {
        this.setState((currentState) => {
            return {showSideNav: !currentState.showSideNav}
        })
    };

    renderDietList(elements) {
        const diets = elements.map((el) =>
            <li className="horizontal">
                <h5>{el}</h5>
            </li>);
        return (
            <ul className="center">
                {diets}
            </ul>
        );
    }

    render() {
        const diets = ["Vegan", "Vegetarian", "Paleo", "Macrobiotic", "Ketogenic", "Low Sugar"];

        return (
            <div id="home-container">
                <NavBar/>
                <section id="main">
                    <br/> <br/><br/>
                    <div className="main-text">
                        Want to try <span>something new</span>, but don't know where to start?
                        <br/> Tons of diets out there
                        but choosing one is difficult?
                    </div>
                    <div className="sub-main-text">
                        Get started with our 7-day meal plan on one specific diet,
                        rate it every evening and
                        <br/>a few weeks of testing different food plans
                        and see which one suits you the best!
                    </div>
                    <br/> <br/>
                    <div className="call-to-action">
                        <Button href='./logged-in-home' size='lg' variant="outline-success">START YOUR FREE PLAN</Button>
                    </div>
                    <br/><br/>
                    <div className="call-to-action-text">
                        JOIN Diet Tester & experience the good aspects of many different diets! SIGN up to START!
                    </div>
                </section>
                <br/><br/>
                <Heading textAlign="center">Available meal plan experiences:</Heading>
                <br/>
                <Container>
                    {this.renderDietList(diets)}
                </Container>
            </div>
        )
    }
}

export default Home;
