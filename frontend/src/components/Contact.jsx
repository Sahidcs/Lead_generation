// Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'
import { useAlert } from 'react-alert'
function Contact() {
    const alert =useAlert();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/contact', formData);
      console.log('Contact form submitted:', response.data);
      alert.success(response.data);
      // Optionally, you can show a success message to the user.
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert.error(error);
      // Handle and display an error message to the user.
    }
  };

  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
