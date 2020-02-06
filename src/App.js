import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import {DietPlan} from "./dietplan/DietPlan";
import LoggedInHome from "./loggedin/LoggedInHome";
import {DailySurvey} from "./survey/DailySurvey";
import Menu from "./menu/Menu";
import ShoppingList from "./shoppinglist/ShoppingList"
import {Recipe} from "./recipe/Recipe";

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
                    <Route path="/diet-plan" exact component={DietPlan}/>
                    <Route path="/daily-survey" exact component={DailySurvey}/>
                    <Route path="/menu" exact component={Menu}/>
                    <Route path="/shopping-list" exact component={ShoppingList}/>
                    <Route path="/recipe" excact component={Recipe}/>
                </Switch>

            </Router>
        );
    }
}

export default App;
