import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FrontPage from './FrontPage.js';
import FoodPage from './FoodPage.js';
import SportsPage from './SportsPage.js';
import ContactPage from './ContactPage.js';
import IntroPage from './IntroPage.js';
import CreateAccount from './CreateAccount.js';
import WorkoutPage from './Workouts.js'
import Running from './Running.js'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={IntroPage}/>
            <Route path="/home" component={FrontPage}/>
            <Route path="/create" component={CreateAccount}/>
            <Route path="/food" component={FoodPage}/>
            <Route path="/sports" component={SportsPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/workout" component={WorkoutPage}/>
            <Route path="/running" component={Running}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
