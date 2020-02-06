import * as React from "react";
import { Heading, Subhead, Flex } from 'rebass'
import {
  CallToAction, Section, Checklist, Testimony
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
    state = {showSideNav:false}
 
    handleSideNavToggle = ()=>{
        this.setState((currentState)=>{
            return {showSideNav: !currentState.showSideNav}
        })
    }
    
    render() {

        return (
            
            <div id="home-container">
                <Heading textAlign="center">Build a healthy life
                    <h5 textAlign="center">7-Day Diet Menu</h5>
                </Heading>
                
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

                <Heading textAlign="center">What people say</Heading>
                <Flex alignItems="flex-end" justifyContent="space-around">
                    <Testimony
                        authorAvatar="https://gef.stanford.edu/sites/g/files/sbiybj8206/f/styles/sm-square-profile/public/billgatesheadshot_credit_thegatesnotesllc_copy_0.jpg?itok=Gf3g6hhT"
                        authorName="Bill Gates"
                        authorTitle="Co-Founder Microsoft">
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
