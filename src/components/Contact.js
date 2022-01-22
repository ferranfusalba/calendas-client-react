import React from 'react';
import "../App.css";

const Contact = () => {
    return ( <form className = "form" >
        <h1>Contact form phone</h1>

        <label>Name</label>
        <input placeholder = "name" />

        <label>Email</label>
        <input placeholder = "email" />

        <label>Message</label>
        <textarea placeholder = "message" />

        <button type="submit">Submit</button>
        </form>
    )
};

export default Contact;