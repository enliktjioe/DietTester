import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import {DietPlan} from "./diet/DietPlan";
import LoggedInHome from "./loggedin/LoggedInHome";
import NavBar from "./navbar/NavBar";
import Menu from "./menu/Menu";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Redirect to="/home"/>
                    </Route>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/logged-in-home" exact component={LoggedInHome}/>
                    <Route path="/navbar" exact component={NavBar}/>
                    <Route path="/diet-plan" exact component={DietPlan}/>
                    <Route path="/menu" exact component={Menu}/>
                </Switch>

            </Router>
        );
    }
}
export default App;
