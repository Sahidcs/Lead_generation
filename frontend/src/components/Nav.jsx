import React, { useState } from 'react';
import { Button } from '@mui/material';
import './nav.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isLogin = JSON.parse(localStorage.getItem('login'));
  return (
    <nav className="navbar">
    <div className="navbar-container container">
    <h1 className="logo">
        {" "}
        <a href="/about">TorioxLead</a>{" "}
      </h1>
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Services <ArrowDropDownIcon /></button>
            <div className="dropdown-content">
              &nbsp; &nbsp;
              <a href="/start">LinkedIn Prospector</a>
              <a href="#">Email</a>
              <a href="/chat">ChatBot</a>
            </div>
          </div>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
        <Button variant="outlined" href={isLogin?'/logout':'/login'}>{isLogin?'logout':'login'}</Button></li>
      
      </ul>

    </div>
  </nav>
  );
}

export default Nav;



