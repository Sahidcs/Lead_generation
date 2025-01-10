import React from 'react';
import Home from "./components/Home"
import Lead from "./components/LeadPortal"
import Portal from './components/Portal'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddToList from './components/AddToList';
import StartWith from './components/startWith';
import ChatBot from './components/chatBot';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Logout from './components/Logout'; // Make sure you have the correct import for Logout

function App() {
  const islogin = JSON.parse(localStorage.getItem('login'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Lead />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={islogin?<Portal />:<Lead />} />
        <Route path="/add" element={<AddToList />} />
        <Route path="/start" element={<StartWith />} />
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
