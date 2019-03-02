import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SportsPage.css';
import football from './football.jpg';

class SportsPage extends Component {
  handleCancelClick = () => {
    alert("you cancled");
    this.props.history.push("/");
  };
  
  handleConfirmClick = () => {
    alert("you confirmed");
    this.props.history.push("/");
  };

  render() {
    return (<div>
      <header className="header">
        <button onClick={this.handleConfirmClick}>confirm</button>
        <button onClick={this.handleCancelClick}>cancel</button>
      </header>
      <body>
        <div className="row">
          <div className="column">
            <button><img src={football} alt="Football"/></button>
            <button>3</button>
            <button>5</button>
            <button>7</button>
          </div>
          <div className="column">
            <button>2</button>
            <button>4</button>
            <button>6</button>
            <button>8</button>
          </div>
        </div>
      </body>
    </div>);
  }
}

export default SportsPage;
