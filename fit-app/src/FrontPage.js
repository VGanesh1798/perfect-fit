import React from 'react';
import './FrontPage.css';

class FrontPage extends React.Component {
    render() {
        return (
            <div className="FrontPage">
                <div className="Front-header">
                    <h1>Welcome to Perfect-Fit</h1>
                </div>
                <div className="Link-bar">
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                </div>
                <div className="Content side">
                    <p>
                        About us
                    </p>
                </div>
                <div className="Content middle">
                    <p>
                        Welcome to the Perfect-Fit website. On the left side, you
                        can enter a meal and receive input on calories. Select the
                        button on the right to find workouts related to your sport of choice.
                    </p>
                </div>
                <div className="Content side">
                    <p>
                        Vasu Ganesh<br/>
                        Sung Ki Ling<br/>
                        Deniz Kerim<br/>
                        Areeb Ahmed<br/>
                    </p>
                </div>
                <div className="Footer-bar">
                    <a href="#"><b>Contact us</b></a>
                </div>
            </div>
        )
    }
}

export default FrontPage;