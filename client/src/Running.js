import React from 'react';
import './FrontPage.css'
import './Running.css'

class Running extends React.Component {
  constructor(props) {
    super(props);
    this.calorieCalc = this.calorieCalc.bind(this);
  }
  render() {
    return (
      <body>
        <div className='FrontPage'>
          <div className='Front-header'>Running</div>
          <div className="Link-bar">
            <a href="/home">Home</a>
            <a href="/food">Calorie Counter</a>
            <a href="/sports">Sports</a>
            <a href="/workout">Workouts</a>
          </div>
          <form className="running-inputs">
            Distance Ran(miles): <br/><input id='distance' type='number' required/> <br/>
            Time Spent Running(min): <br/><input id='time-running' type='number' required/> <br/>
            Weight(lbs): <br/><input id='weight' type='number' required/> <br/>
            <button type='submit' onClick={this.calorieCalc}>Calculate</button>
          </form>
        </div>
        <div id='output'></div>
      </body>
    )
  }
  calorieCalc (e) {
    e.preventDefault()
    let d = document.getElementById('distance').value
    let t = document.getElementById('time-running').value
    let w = document.getElementById('weight').value

    let c = (0.0175*10*(w/2.20462))*t
    document.getElementById('output').innerHTML = 'Calories Burned: ' + c.toString();
    document.getElementById('output').style.textAlign = 'center'
    document.getElementById('output').style.marginTop = "10px"
    return false
  }
}

export default Running