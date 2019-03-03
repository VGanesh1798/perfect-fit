import React from 'react';
import './IntroPage.css';
import './FrontPage.css';
import { Redirect } from 'react-router-dom';
import firebase from './firebase.js';

let curr_name;

class IntroPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            email: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        curr_name = this.state.username;
        let found = false;
        var usersRef = firebase.database().ref('users');
        var self = this;
        var item = {
            user: this.state.username,
            password: this.state.password,
            email: this.state.email,
        }
        usersRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val(); 
                if(item.user === childData.user && item.password === childData.password) {
                    console.log("Hello World!");
                    found = true;
                }
            });
            if(found === true) {
                console.log("What's up?");
                self.props.history.push('/home');
            }
        });
    }

    render() {
        return (
            <div className="IntroPage">
                <div className="Front-header">
                    <h1>Welcome to Perfect-Fit</h1>
                </div>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        Username: <input type='text' name="username" placeholder="Username" value ={this.state.username} onChange={this.handleChange} required/> <br/>
                        Password: <input type='password' name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/> <br/>
                        Email: <input type='text' name='email' placeholder="Email" value = {this.state.email} onChange={this.handleChange} required/> <br/>
                        <button>Login</button>
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