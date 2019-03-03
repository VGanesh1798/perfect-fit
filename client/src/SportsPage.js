import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SportsPage.css';
import './FrontPage.css';
import basketball from './images/basketball.png';
import football from './images/football.png';
import baseball from './images/baseball.png';
import bowling from './images/bowling.png';
import soccer from './images/soccer.png';
import tennis from './images/tennis.png';
import golf from './images/golf.png';
import pool from './images/pool.png';

class SportsPage extends Component {
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

  handleConfirmClick = () => {
    alert("you confirmed");
    this.props.history.push("/home");
  };

  handleCancelClick = () => {
    alert("you cancelled");
    this.props.history.push("/home");
  };

  render() {
    return (<div className="SportsPage">
      <div className="Front-header">
        <h1>Sports</h1>
        <button className="Sporty" onClick={this.handleConfirmClick}>confirm</button>
        <button className="Sporty" onClick={this.handleCancelClick}>cancel</button>
      </div>
      <div className="Link-bar">
          <a href="/home">Home</a>
          <a href="/food">Calorie Counter</a>
          <a href="/sports">Sports</a>
          <a href="/workout">Workouts</a>
      </div>
      <div className="Sports-Content side">
      </div>
      <body className="Content middle">
        <div className="row">
          <div className="column">
            <button><img src={football} alt="Football" width="200" height="200" /></button>
            <button><img src={soccer} alt="Soccer" width="200" height="200" /></button>
          </div>
          <div className="column">
            <button><img src={tennis} alt="Tennis" width="200" height="200" /></button>
            <button><img src={bowling} alt="Bowling" width="200" height="200" /></button>
          </div>
          <div className="column">
            <button><img src={basketball} alt="Basketball" width="200" height="200" /></button>
            <button><img src={baseball} alt="Baseball" width="200" height="200" /></button>
          </div>
          <div className="column">
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

export default SportsPage;