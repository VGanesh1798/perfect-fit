import React from 'react';
import './Calc.css';
import firebase from './firebase.js';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: null,
            calorie: null,
            meals: Array(0).fill(0),
            sum: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({calorie: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const foodRef = firebase.database().ref('user-calories')
        const food = {
            food: this.state.food,
        }
        foodRef.push(food);
        this.setState({
            calorie: 0,
        })
    }

    addmeal() {
        this.state.meals.push(parseFloat(this.state.calorie));
        this.setState({calorie: this.state.calorie, meals:this.state.meals, sum: this.state.sum + this.state.meals[this.state.meals.length-1]});
        if(isNaN(this.state.sum)) {
            this.setState({sum: 0});
        }
    }

    render() {
        return (
            <div className="Calorie-calc">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='number' placeholder="Enter a number of calories" value = {this.state.calorie} onChange = {this.handleChange}/>
                </form>
                <button className="Add-button" onClick={() => this.addmeal()}>Add</button>
                <form>
                    <div className="Calorie-table">
                        {this.state.sum}
                    </div>
                </form>
            </div>
        )
    }
}

export default Calc;