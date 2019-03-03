import React from 'react';

class Running extends React.Component {
  render() {
    return (
      <div>
        <script src="https://www.desmos.com/api/v1.2/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
        <form className="running-inputs">
          Distance Ran: <br/><input type='text'/> <br/>
          Time Spent Running: <br/><input type='text'/>
        </form>
      </div>
    )
  }
}

export default Running