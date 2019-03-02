import React from 'react';
import './IntroPage.css';
import './FrontPage.css';
import firebase from './firebase.js';

class IntroPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    isUser() {
        if(firebase.database().ref('users').on(this.state.username) && firebase.database().ref('users'.on(this.state.password))) {
            window.location.replace("Google.com");            
        } 
    }

    render() {
        return (
            <div className="IntroPage">
                <div className="Front-header">
                    <h1>Welcome to Perfect-Fit</h1>
                </div>
                <div className="Login">
                    <form>
                        Username: <input type='text' name="username" placeholder="Username" value ={this.state.username} onChange={this.handleChange}/> <br/>
                        Password: <input type='password' name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/> <br/>
                        <button onClick = {() => this.isUser()}>Login</button>
                    </form>
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