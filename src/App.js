import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import {DietPlan} from "./diet/DietPlan";
import LoggedInHome from "./loggedin/LoggedInHome";
import {NavBar} from "./navbar/NavBar";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Redirect to="/diet-tester/home"/>
                    </Route>
                    <Route path="/diet-tester/home" exact component={Home}/>
                    <Route path="/diet-tester/logged-in-home" exact component={LoggedInHome}/>
                    <Route path="/diet-tester/navbar" exact component={NavBar}/>
                    <Route path="/diet-tester/diet-plan" exact component={DietPlan}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
