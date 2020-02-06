import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "./home/Home";
import {DietPlan} from "./dietplan/DietPlan";
import LoggedInHome from "./loggedin/LoggedInHome";
import {DailySurvey} from "./survey/DailySurvey";
import Menu from "./menu/Menu";
import ShoppingList from "./shoppinglist/ShoppingList"
import {Recipe1} from "./recipe/Recipe1";
import ChosenDiet from "./chosendiet/ChosenDiet";

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
                    <Route path="/my-diet" exact component={ChosenDiet}/>
                    <Route path="/menu" exact component={Menu}/>
                    <Route path="/shopping-list" exact component={ShoppingList}/>
                    <Route path="/recipe1" excact component={Recipe1}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
