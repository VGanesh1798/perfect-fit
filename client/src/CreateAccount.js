import React from 'react';
import './FrontPage.css';
import './CreateAccount.css';
import firebase from './firebase.js';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      email: null,
      users: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState ({ [event.target.name]: event.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let found = false;
    var self = this;
    var usersRef = firebase.database().ref('users');
    var item = {
      user: this.state.username,
      password: this.state.password,
      email: this.state.email,
    }
    usersRef.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if(item.user === childData.user || item.email === childData.email) {
          console.log("Looks like you already exist!")
          found = true;
        }
      });
      if(found !== true) {
        usersRef.push(item);
        this.setState({
          username: "",
          password: "",
          email: "",
        });
        self.props.history.push("/");
      }
    });
  
  }

  render() {
    return (
      <div className="create_page">
        <div className='Front-header'>
          <h1>Welcome to Perfect-Fit</h1>
        </div>
        <div className='create-account'>
          <form onSubmit={this.handleSubmit}>
            Username: <input type='text' name="username" placeholder="Username" value = {this.state.username} onChange = {this.handleChange} required/> <br/>
            Password: <input type='password' name="password" placeholder="Password" value = {this.state.password} onChange = {this.handleChange} required/> <br/>
            Email: <input type='text' name="email" placeholder="Email" value = {this.state.email} onChange = {this.handleChange} required/> <br/>
            <button>Create Account</button>
          </form>
        </div>
        <a href='./'>Back to Login</a>
      </div>
    );
  }
}

export default CreateAccount;