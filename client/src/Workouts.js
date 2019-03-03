import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SportsPage.css';
import './FrontPage.css';
import basketball from './images/basketball.png';
import running from './images/running.png';
import baseball from './images/baseball.png';
import bowling from './images/bowling.png';
import soccer from './images/soccer.png';
import tennis from './images/tennis.png';
import golf from './images/golf.png';
import pool from './images/pool.png';

class WorkoutPage extends Component {
  state = {
    session: '',
}

componentDidMount() {
    this.setSession()
        .then(res => this.setState({session: res.express}))
        .catch(err => console.log(err));
}        

setSession = async () => {
    const response = await fetch('/api/session');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};


  goBackClick = () => {
    this.props.history.push("/home");
  };

  render() {
    return (<div className="SportsPage">
      <div className="Front-header">
        <h1>Workouts</h1>
        <button className="Sporty" onClick={this.goBackClick}>Go back</button>
      </div>
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
      <div className="Footer-bar">
                    <a href="/contact"><b>Contact Us</b></a>
                    <p>{this.state.session}</p>
                </div>
    </div>);
  }
}

export default WorkoutPage;