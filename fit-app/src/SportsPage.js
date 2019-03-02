import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          Sports
        </header>
        <body>
          <div className="column">
            <div className="column">
              <button>1</button>
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
      </div>
    );
  }
}

export default App;
