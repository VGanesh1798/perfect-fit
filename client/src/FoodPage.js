import React from 'react';
import './FoodPage.css';
import './FrontPage.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: null,
            calorie: null,
            meals: Array(0).fill(0),
            sum: 0,
        }
    }

    handleChange = event => {
        this.setState({calorie: event.target.value});
    }

    addmeal() {
        this.state.meals.push(parseFloat(this.state.calorie));
        this.setState({calorie: this.state.calorie, meals:this.state.meals, sum: this.state.sum + this.state.meals[this.state.meals.length-1]});
    }

    render() {
        return (
            <div className="Calorie-calc">
                <form>
                    <input 
                        type='number'
                        value = {this.state.calorie}
                        onChange = {this.handleChange}
                    />
                </form>
                <button onClick={() => this.addmeal()}>Add</button>
                <div className="Calorie-table">
                    {this.state.sum}
                </div>
            </div>
        )
    }
}

class FoodPage extends React.Component {
    render() {
        return (
            <div className="FoodPage">
                <div className="Front-header">
                    <h1>Calorie Counter</h1>
                </div>
                <div className="Link-bar">
                    <a href="/">Home</a>
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                </div>
                <div className="Content side">
                    <p>
                        Your caloric goals:<br/>

                    </p>
                </div>
                <div className="Content middle">
                    <Calc />
                </div>
                <div className="Content side">
                        Milk:
                </div>
                <div className="Footer-bar">
                    <a href="/contact"><b>Contact Us</b></a>
                    <p>Welcome, user</p>
                </div>
            </div>
        )
    }
}

export default FoodPage;