import React from 'react';
class football extends React.Components{
  render() {
        return (
      <div id="header">
             <img src="http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_506220/Image/Photos/Athletics/xxxx_spo_ocr-l-generic-football-stock-001.jpg" />
      </div>
            <div className="fb">
                <div className="fb-header">
                    <h1>Football</h1>
                </div>
                <div className="Content side">
                    <p>
                        Let's calculate how long you have to work!
                    </p>
                </div>
                <div className="Content middle">
                    <img src={soccer} className="soccer-ball" alt=""></img>
                    <p>
                        Input the amount of calories that you want to burn, and we will calculate it for you!
                    </p>
          <button onclick="function()">How much calories?</button>
                </div>
            </div>
        )
    }
}

window.onload= function(){
    var cal=prompt("tell me how much calories");
    System.out.printf("you need ",cal/600," hours of football");
}