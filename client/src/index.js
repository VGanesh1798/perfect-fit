import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import CreateAccount from './CreateAccount.js';
import ContactPage from './ContactPage.js';
import SportsPage from './SportsPage.js';
import WorkoutPage from './Workouts.js';
import FrontPage from './FrontPage.js';
import IntroPage from './IntroPage.js';
import FoodPage from './FoodPage.js';
import Running from './Running.js';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={IntroPage}/>
            <Route path="/create" component={CreateAccount}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/workout" component={WorkoutPage}/>
            <Route path="/sports" component={SportsPage}/>
            <Route path="/running" component={Running}/>
            <Route path="/home" component={FrontPage}/>
            <Route path="/food" component={FoodPage}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
