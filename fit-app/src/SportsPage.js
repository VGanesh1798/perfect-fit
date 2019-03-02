import React, {Component } from 'react';
import './SportsPage.css';
import './FrontPage.css';

class SportsPage extends Component {
  render() {
    return (
      <div className="SportsPage">
        <div className="Front-header">
          <h1>Sports</h1>
        </div>
        <div className="Link-bar">
          <a href="/">Home</a>
          <a href="/food">Calorie Counter</a>
          <a href="/sports">Sports</a>
        </div>
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

export default SportsPage;
