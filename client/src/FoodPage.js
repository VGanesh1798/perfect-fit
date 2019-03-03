import React from 'react';
import './FoodPage.css';
import './FrontPage.css';
import Calc from './Calc.js'
import curr_name from './IntroPage.js';
import {Button} from 'react';



	 
	 
class FoodPage extends React.Component {
    render() {
        return (
            <div className="FoodPage">
                <div className="Front-header">
                    <h1>Calorie Counter</h1>
                </div>
                <div className="Link-bar">
                    <a href="/home">Home</a>
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                    <a href="/workout">Workouts</a>
                </div>
                <div className="Content side">
                    <p>
                        Your caloric goals:<br/>

                    </p>
                </div>
                <div className="Content middle">
                    <Calc />
                    <p>Please enter an amount of calories you have consumed. For
                        convenience, some food items are listed on the right to quick-add to the list.
                        When finished, click send to have your goals tracked.
                    </p>
                </div>
                <div className="Content side">
                    <p>
                        Quick add
                    </p>
                    <input id="b1" type="button" value="Milk:124 calories" name=""/><br/>
					<input id="b2" type="button" value="Chicken:335 calories" name=""/><br/>
					<input id="b3" type="button" value="Soylent:400 calories" name=""/><br/>
					<input id="b4" type="button" value="Eggs:78 calories" name=""/><br/>
					<input id="b5" type="button" value="Ice cream:137 calories" name=""/><br/>
					<input id="b6" type="button" value="Soda: 150 calories" name=""/><br/>
					<input id="e1" type="button" value="Calculate" name=""/>
                </div>
                <div className="Footer-bar">
                    <a href="/contact"><b>Contact Us</b></a>
                    <p>Welcome, {curr_name}</p>
                </div>
            </div>
        )
    }
}

window.onload=function(){
		 var oe1=document.getElementById("e1");
         var ob1=document.getElementById("b1");
         var ob2=document.getElementById("b2");
		 var ob3=document.getElementById("b3");
		 var ob4=document.getElementById("b4");
		 var ob5=document.getElementById("b5");
		 var ob6=document.getElementById("b6");
         var num = 0; 
         ob1.onclick = function(){
             num+=124;
      
         }
         ob2.onclick = function(){
             num+=335;
           
         }
		 ob3.onclick = function(){
             num+=400;
           
         }
		 ob4.onclick = function(){
             num+=78;  
         }
		 ob5.onclick = function(){
             num+=137;  
         }
		 ob6.onclick = function(){
             num+=750;  
         }
		 oe1.onclick = function(){
             window.alert(num);
           
         }
     }

export default FoodPage;