import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FrontPage from './FrontPage.js';
import FoodPage from './FoodPage.js';
import SportsPage from './SportsPage.js';
import ContactPage from './ContactPage.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={FrontPage}/>
            <Route path="/food" component={FoodPage}/>
            <Route path="/sports" component={SportsPage}/>
            <Route path="/contact" component={ContactPage}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
