import React, { useState } from 'react';
import './addToList.css';
import { Button } from '@mui/material'
import axios from 'axios';
function AddToList() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [style, setstyle] = useState('contact-form-overlay');
  const [formData, setFormData] = useState({
    name:  '',
    email:'',
    position:'',
    companyname:'',
    website:'',
    facebook:'',
    twitter:'',
    instagram:''

  });

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setstyle('onoverlay');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newContact = { ...formData };
    setContacts([...contacts, newContact]);
    setFormData({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position:formData.position,
      companyname:formData.companyname,
      website:formData.website,
      facebook:formData.facebook,
      twitter:formData.twitter,
      instagram:formData.instagram
       
    });
    const {data}=  await axios
    .post("/api/v1/add", {
    formData
    })
   console.log(data);
    setFormVisible(false);
  };

  return (
    <div className="container">
      <button id="showFormButton" className="popover-button" onClick={toggleForm}>
        {isFormVisible ? '' : 'Add'}
      </button>

      {isFormVisible && (
        <div id="contactFormOverlay" className={style}>
          <div id="contactFormContainer" className="contact-form-container">
            <button id="closeButton" className="close-button" onClick={toggleForm}>
              &#10006;
            </button>
            <h2>Add Contact</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">website Link:</label>
                <input
                  type="text"
                  id="phone"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">LinkedIn:</label>
                <input
                  type="text"
                  id="phone"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                />
              </div>
        
              <div className="form-group">
                <label htmlFor="owner">Position:</label>
                <input
                  type="text"
                  id="owner"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="directDial">Company Name:</label>
                <input
                  type="text"
                  id="directDial"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" variant="contained">Add</Button>
            </form>
          </div>
        </div>
      )}


    </div>
    
  );
}

export default AddToList;

