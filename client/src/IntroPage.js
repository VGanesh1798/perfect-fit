import React from 'react';
import './IntroPage.css';
import './FrontPage.css';

class IntroPage extends React.Component {
    render() {
        return (
            <div className="IntroPage">
                <div className="Front-header">
                    <h1>Welcome to Perfect-Fit</h1>
                </div>
                <div className="Login">
                    Username: <input type='text'/> <br/>
                    Password: <input type='password'/> <br/>
                    <a href='./home' class='create-button'>Login</a>
                </div>
                <br/>
                <div className="create-account">
                    Don't have an account?
                    <a href='./create'>Click here</a>
                </div>
            </div>
        )
    }
}
export default IntroPage;