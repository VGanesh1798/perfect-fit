import React from 'react';
import './ContactPage.css';
import './FrontPage.css';

class ContactPage extends React.Component {
    render() {
        return (
            <div className="ContactPage">
                <div className="Front-header">
                    <h1>Contact Information</h1>
                </div>
                <div className="Link-bar">
                    <a href="/home">Home</a>
                    <a href="/food">Calorie Counter</a>
                    <a href="/sports">Sports</a>
                    <a href="/workout">Workouts</a>
                </div>
                <div className="Contact-info">
                    <p>
                        Our team consists of four sophomore computer science majors at
                        Missouri University of Science & Technology.<br/>
						Vasu Ganesh vgbn4@mst.edu<br/>
						Sung Ki Ling slb54@mst.edu<br/>
						Areeb Ahmed asaww2@mst.edu<br/>
						Deniz Kerim dkywb@mst.edu<br/>
                    </p>
                </div>
                <div className="Footer-bar">
                    <a href="/contact"><b>Contact us</b></a>
                    <p>Welcome, user</p>
                </div>
            </div>
        )
    } 
}

export default ContactPage;
