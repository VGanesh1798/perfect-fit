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
                </div>
                <div className="Contact-info">
                    <p>
                        Our team consists of four sophomore computer science majors at
                        Missouri University of Science & Technology.
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
