import React from 'react';
import './FoodPage.css';
import './FrontPage.css';
import Calc from './Calc.js'
import curr_name from './IntroPage.js';

class FoodPage extends React.Component {
    render() {
        return (
            <div className="FoodPage">
                <div className="Front-header">
                    <h1>Calorie Counter</h1>
                </div>
                <div className="Link-bar">
                    <a href="/home">Home</a>
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                    <a href="/workout">Workouts</a>
                </div>
                <div className="Content side">
                    <p>
                        Your caloric goals:<br/>

                    </p>
                </div>
                <div className="Content middle">
                    <Calc />
                    <p>Please enter an amount of calories you have consumed. For
                        convenience, some food items are listed on the right to quick-add to the list.
                        When finished, click send to have your goals tracked.
                    </p>
                </div>
                <div className="Content side">
                    <p>
                        Quick add
                    </p>
                    <button>1c 2% Milk (124 calories)</button>
                    <button>1c Chicken (335 calories)</button>
                </div>
                <div className="Footer-bar">
                    <a href="/contact"><b>Contact Us</b></a>
                    <p>Welcome, {curr_name}</p>
                </div>
            </div>
        )
    }
}

export default FoodPage;