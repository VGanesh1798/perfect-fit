import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './firebase.js';

import './CreateAccount.css';

class CreateAccount extends React.Component {
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
    const itemsRef = firebase.database().ref('users');
    const item = {
      user: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    itemsRef.push(item);
    this.setState({
      username: "",
      password: "",
      email: "",
    });
    this.props.history.push("/home");
  }

  cancel = () => {
    this.props.history.push("/");
  };

  render() {
    return (<div>
        <header className="header">
          Perfect Fit
        </header>
        <body>
          <form className="inputs" onSubmit={this.handleSubmit}>
            <input
              type='text'
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required />
            <input
              type='password'
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required />
            <input
              type='text'
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required />
            <button className="button">Create Account</button>
          </form>
          <button className="button" onClick={this.cancel}>
            Cancel
          </button>
        </body>
      </div>);
  }
}
export default CreateAccount;



/*
import React from 'react';
import './CreateAccount.css';
import firebase from './firebase.js';
import { Redirect } from 'react-router-dom';

class CreateAccount extends React.Component {
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
    this.setState ({ [event.target.name]: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('users');
    const item = {
      user: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    itemsRef.push(item);
    this.setState({
      username: "",
      password: "",
      email: "",
    });
    this.props.history.push("/home");
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
*/