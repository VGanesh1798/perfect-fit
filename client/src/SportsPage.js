import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './firebase.js';

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
    this.props.history.push("/home");
  };

  render() {
    return (<div>
      <header className="header">
        Sports
      </header>
      <button className="button" onClick={this.handleCancelClick}>cancel</button>
      <body>
        <div className="row">
          <div className="column">
            <button onClick={this.editSport}>
              <img className="image" src={football} alt="Football" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={soccer} alt="Soccer" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={tennis} alt="Tennis" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={bowling} alt="Bowling" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={basketball} alt="Basketball" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={baseball} alt="Baseball" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={golf} alt="Golf" height="200" width="200" />
            </button>
            <button>
              <img className="image" src={pool} alt="Pool" height="200" width="200" />
            </button>
          </div>
        </div>
      </body>
    </div>);
  }
}

export default SportsPage;