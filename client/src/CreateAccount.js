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
      users: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let found = false;
    var usersRef = firebase.database().ref('users');
    var item = {
      user: this.state.username,
      password: this.state.password,
      email: this.state.email,
    }
    usersRef.on('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        if (item.user === childData.user || item.email === childData.email) {
          console.log("Looks like you already exist!")
          found = true;
        }
      })
    })
    if (found !== true) {
      usersRef.push(item);
      this.setState({
        username: "",
        password: "",
        email: "",
      });
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    const usersRef = firebase.database().ref('users');
    usersRef.child('user').on('value', function (groupSnap) {
      groupSnap.forEach(function (snap) {
        console.log(snap.user() + ' has ' + snap.val().password);
      });
    });
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val;
      let newState = [];
      for (let item in users) {
        newState.push({
          id: item,
          username: users[item].username,
          password: users[item].password,
          email: users[item].email,
        });
        this.setState({
          users: newState
        });
      }
    });
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
    var usersRef = firebase.database().ref('users');
    var item = {
      user: this.state.username,
      password: this.state.password,
<<<<<<< HEAD
      email: this.state.email
    }
    itemsRef.push(item);
    this.setState({
      username: "",
      password: "",
      email: "",
=======
      email: this.state.email,
    }
    usersRef.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if(item.user === childData.user || item.email === childData.email) {
          console.log("Looks like you already exist!")
          found = true;
        }
      })
    })
    if(found !== true) {
      usersRef.push(item);
      this.setState({
        username: "",
        password: "",
        email: "",
      });
      this.props.history.push("/home");
    }
  }

  componentDidMount() {
    const usersRef = firebase.database().ref('users');
    usersRef.child('user').on('value', function(groupSnap) {
      groupSnap.forEach(function(snap) {
        console.log(snap.user() + ' has ' + snap.val().password);
      });
    });
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val;
      let newState = [];
      for(let item in users) {
        newState.push({
          id: item,
          username: users[item].username,
          password: users[item].password,
          email: users[item].email,
        });
      this.setState({
        users: newState
      });
      }
>>>>>>> b49cf01f2332f35aab99e4a4441c048854d010f9
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
*/