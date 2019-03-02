import React from 'react';
import './FrontPage.css';

class FrontPage extends React.Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
      };
      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      };
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
      };

    render() {
        return (
            <div className="FrontPage">
                <div className="Front-header">
                    <h1>Welcome to Perfect-Fit</h1>
                </div>
                <div className="Link-bar">
                    <a href="/">Home</a>
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                </div>
                <div className="Content side">
                    <p>
                        Track your calories and workouts!
                    </p>
                </div>
                <div className="Content middle">
                    <p>
                        Welcome to the Perfect-Fit website. This website was designed
                        for the Pickhacks 2019 competition. It features a calorie counter 
                        to track meals and a workout planner for various sports.
                    </p>
                </div>
                <div className="Content side">
                    <p>{this.state.response}</p>
                    <form onSubmit={this.handleSubmit}>
                    <p>
                        <strong>Post to Server:</strong>
                    </p>
                    <input
                        type="text"
                        value={this.state.post}
                        onChange={e => this.setState({ post: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                    </form>
                    <p>{this.state.responseToPost}</p>
                </div>
                <div className="Footer-bar">
                    <a href="/contact"><b>Contact us</b></a>
                    <p>Welcome, user</p>
                </div>
            </div>
        )
    }
}

export default FrontPage;