import React from 'react';
import './FoodPage.css';
import './FrontPage.css';

class FoodPage extends React.Component {
    render() {
        return (
            <div className="FoodPage">
                <div className="Front-header">
                    <h1>Calorie Counter</h1>
                </div>
                <div className="Link-bar">
                    <a href="/">Home</a>
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                </div>
                <div className="Calorie-calc">
                    <row>
                        <button>1</button>
                    </row>
                    <button>1</button>
                </div>
                <div className="Footer-bar">
                    <a href="#"><b>Contact Us</b></a>
                </div>
            </div>
        )
    }
}

export default FoodPage;