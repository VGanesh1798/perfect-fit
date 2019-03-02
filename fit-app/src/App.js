import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick() {
    alert('hi')
  }
  render() {
    return (
      <div className="App">
        <div className="button">
          <button id='Soccer' className="Sports" onClick={this.handleClick}>Soccer</button>
          <button className="Sports">Football</button>
          <button className="Sports">Baseball</button>
        </div>
      </div>
    );
  }
}

export default App;
