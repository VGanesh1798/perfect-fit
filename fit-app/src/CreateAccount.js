import React from 'react';
import './FrontPage.css';
import './CreateAccount.css';

class CreateAccount extends React.Component {
  handleCreate() {
    window.location.assign('./home');
  }

  render() {
    return (
      <div className="create_page">
        <div className='Front-header'>
          <h1>Welcome to Perfect-Fit</h1>
        </div>
        <div className='create-account'>
          Username: <input type='text'/> <br/>
          Password: <input type='password'/> <br/>
          Email: <input type='text'/> <br/>
          <a href='./home' class='create-button'>Create Account</a>
        </div>
        <a href='./'>Back to Login</a>
      </div>
    )
  }
}

export default CreateAccount;