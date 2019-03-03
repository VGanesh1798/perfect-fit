import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SportsPage.css';
import basketball from './images/basketball.png';
import running from './images/running.png';
import baseball from './images/baseball.png';
import bowling from './images/bowling.png';
import soccer from './images/soccer.png';
import tennis from './images/tennis.png';
import golf from './images/golf.png';
import pool from './images/pool.png';

class WorkoutPage extends Component {
  goBackClick = () => {
    this.props.history.push("/home");
  };

  render() {
    return (<div>
      <header className="header">
        <button onClick={this.goBackClick}>Go back</button>
      </header>
      <body>
        <div className="row">
          <div className="column">
            <form action='/running' method='GET'>
              <button ><img src={running} alt="Running" width="200" height="200" /></button>
            </form>
            <button><img src={soccer} alt="Soccer" width="200" height="200" /></button>
            <button><img src={tennis} alt="Tennis" width="200" height="200" /></button>
            <button><img src={bowling} alt="Bowling" width="200" height="200" /></button>
          </div>
          <div className="column">
            <button><img src={basketball} alt="Basketball" width="200" height="200" /></button>
            <button><img src={baseball} alt="Baseball" width="200" height="200" /></button>
            <button><img src={golf} alt="Golf" width="200" height="200" /></button>
            <button><img src={pool} alt="Pool" width="200" height="200" /></button>
          </div>
        </div>
      </body>
    </div>);
  }
}

export default WorkoutPage;