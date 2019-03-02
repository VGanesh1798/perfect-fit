import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react';




class App extends Component {
  
	render() {
    return (
      <div className="App">
        <p id="demo" onclick="color()">Welcome to Perfect Fit!</p>
		<header className="App-header">
			<br/>
			<button onclick="hello">What did you eat?</button>
			Calculate the calories that you absorbed
			<img src="https://www.snopes.com/tachyon/2018/04/fruits_feature.jpg?resize=865,452" alt="." />
			<br/>
			<a href="https://www.desmos.com/scientific">Calculator</a>
			<br/>
			<button onclick="hello">What sports do you prefer?</button>
			Calculate the calories that you used
			<img src="https://files.northernbeaches.nsw.gov.au/sites/default/files/styles/gi--main-thumbnail/public/images/general-information/sports-associations/sports-associations.jpg?itok=BGgsVt7w" alt="." />
          <p>
            Calorie consumption for common sports(in 1 hour):<br/>
			Running:600<input id="b1" type="button" value="+" name=""/><br/>
			Walking:250<input id="b2" type="button" value="+" name=""/><br/>
			Swimming:590<input id="b3" type="button" value="+" name=""/><br/>
			Tennis:524<input id="b4" type="button" value="+" name=""/><br/>
			Bike riding:420<input id="b5" type="button" value="+" name=""/><br/>
			Soccer:622<input id="b6" type="button" value="+" name=""/><br/>
			<input id="e1" type="button" value="output" name=""/>
			
          </p>
		  <br/>
		  <br/>
          Enjoy going outside!
		  <br/>
		  <br/>
		  <img src="https://media.treehugger.com/assets/images/2016/07/green-forest-trees.jpg.860x0_q70_crop-scale.jpg" alt="." />
        </header>
		
		<body>
		
		</body>
      </div>
	  
    );
  }
}


     window.onload= function(){
		 var oe1=document.getElementById("e1");
         var ob1=document.getElementById("b1");
         var ob2=document.getElementById("b2");
		 var ob3=document.getElementById("b3");
		 var ob4=document.getElementById("b4");
		 var ob5=document.getElementById("b5");
		 var ob6=document.getElementById("b6");
         var num = 0; 
         ob1.onclick = function(){
             num+=600;
      
         };
         ob2.onclick = function(){
             num+=250;
           
         }
		 ob3.onclick = function(){
             num+=590;
           
         }
		 ob4.onclick = function(){
             num+=524;  
         }
		 ob5.onclick = function(){
             num+=420;  
         }
		 ob6.onclick = function(){
             num+=622;  
         }
		 oe1.onclick = function(){
             window.alert(num);
           
         }
     }



export default App;