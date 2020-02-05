import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import LoggedInHome from "./loggedin/LoggedInHome";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/diet-tester" component={Home}>
                            <Redirect to="/diet-tester/home"/>
                        </Route>
                        <Route path="/diet-tester/home" exact component={Home}/>
                        <Route path="/diet-tester/logged-in-home" exact component={LoggedInHome}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
