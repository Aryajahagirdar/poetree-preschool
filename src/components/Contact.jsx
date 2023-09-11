import React, { useState } from "react";
import './Contact.css';
import axios from 'axios';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Make a POST request to the backend API using Axios
        axios.post('/api/contact', formData)
          .then((response) => {
            console.log(response.data.message); // Log the response from the server
            // Reset the form after successful submission if needed
            setFormData({
              name: '',
              phone: '',
              email: '',
              message: '',
            });
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
          });
      };
    return (
        <div className="contact-container">
            <div className="address">
                <h2>Our Location</h2>
                <p>Row House No. 5, Shroff Soleno, Near Balewadi Stadium, Mhalunge, Pune- 411045</p>
                <p>Contact Number - 1234567890</p>
            </div>
            <div className="form-container">
                <h2>Contact Us</h2>
                <form className="submit-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
