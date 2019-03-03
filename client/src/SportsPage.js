import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './firebase.js';

import './SportsPage.css';

import basketball from './images/basketball.png';
import football from './images/football.png';
import baseball from './images/baseball.png';
import bowling from './images/bowling.png';
import soccer from './images/soccer.png';
import tennis from './images/tennis.png';
import golf from './images/golf.png';
import pool from './images/pool.png';

class SportsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { sport: null }
    this.editSport = this.editSport.bind(this);
  }

  editSport = (event) => {
    alert("u edit sport bruh");
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault();
    const itemsRef = firebase.database().ref('users');
    const item = { sport: this.state.sport }
    itemsRef.push(item);
    this.setState({ sport: "" });
    this.props.history.push("/home");
  };

  handleCancelClick = () => {
    alert("you cancled");
    this.props.history.push("/home");
  };

  render() {
    return (<div>
      <header className="header">
        <button onClick={this.handleCancelClick}>cancel</button>
      </header>
      <body>
        <div className="row">
          <div className="column">
            <button onClick={this.editSport}><img src={football} alt="Football" width="200" height="200" /></button>
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

export default SportsPage;