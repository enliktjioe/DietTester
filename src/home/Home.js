import * as React from "react";
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator, Section, Checklist
} from 'react-landing-page'

const featherCheckmark = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24" height="24"
  viewBox="0 0 24 24"
  fill="none" stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <polyline points="22 4 12 14.01 9 11.01"/>
</svg>

export class Home extends React.Component {

    render() {

        return (
            <div id="home-container">
                <div>
                    This is HEADER
                </div>
                <div 
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}
                >
                    <iframe  src="//www.youtube.com/embed/wRKoRvFwNfY" width="630" height="354"></iframe>
                </div>

                <div 
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}
                >
                    <CallToAction href='./logged-in-home' mt={3}>START YOUR FREE PLAN</CallToAction>
                </div>
                
                <Section
                    // width={1}
                    heading="Why you should join?"
                    subhead="here are some of the science facts"
                >
                <Checklist
                    children={["Benefit 1", "Benefit 2", "Benefit 3"]}
                    checkmark={featherCheckmark}
                />
                </Section>

            </div>
        )
    }
}

export default Home;
