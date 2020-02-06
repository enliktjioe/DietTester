import * as React from "react";
import { Button } from 'react-bootstrap';

import {Heading, Flex} from 'rebass'
import {Testimony} from 'react-landing-page'
import NavBar from "../navbar/NavBar";
import "./Home.css";

export class Home extends React.Component {
    render() {

        return (

            <div id="home-container">
                <NavBar/>

                <section id="main">
                    <div className="main-text">
                        Want to try <span>something new</span>, but don't know where to start?
                        <br /> Tons of diets out there <br />
                        but choosing one is difficult?
                    </div>
                    <div className="sub-main-text">
                        Get started with our 7-day meal plan on one specific diet, 
                        <br /> rate it every evening and
                        <br />a few weeks of testing different food plans
                        <br />and see which one suits you the best!
                    </div>

                    <div className="call-to-action">
                        <br />
                        <Button href='./logged-in-home' variant="outline-success">START YOUR FREE PLAN</Button>
                    </div>

                    <div className="call-to-action-text">
                        JOIN Diet Tester & experience the good aspects of many different diets! SIGN up to START!
                    </div>
                </section>

                <Heading textAlign="center">What people say</Heading>
                <Flex alignItems="flex-end" justifyContent="space-around">
                    <Testimony
                        authorAvatar="data:image/jpeg;base64,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"
                        authorName="Mariel Pähkel"
                        authorTitle="Estonia Vegan & Health Influencer">
                        Make my life more happier!
                    </Testimony>

                    <Testimony
                        authorAvatar="data:image/jpeg;base64,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"
                        authorName="Jeff Bezos"
                        authorTitle="CEO Amazon">
                        Your life is never like before!
                    </Testimony>

                    <Testimony
                        authorAvatar="data:image/jpeg;base64,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"
                        authorName="Ott Tänak"
                        authorTitle="2019 World Rally Champion">
                        I'm becoming a better person!
                    </Testimony>

                </Flex>
            </div>

        )
    }
}

export default Home;
