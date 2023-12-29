// App.js
import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = () => {
    setCurrentForm((prevForm) => (prevForm === 'login' ? 'register' : 'login'));
  }

  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li><a href="#home" style={{fontFamily:'ubuntu', fontSize:'2em'}}>Home</a></li>
          <li><a href="#about" style={{fontFamily:'ubuntu', fontSize:'2em'}}>About</a></li>
          <li><a href="#contact" style={{fontFamily:'ubuntu', fontSize:'2em'}}>Contact Us</a></li>
        </ul>
      </div>
      <div className="left-side">
        <h1 style={{
          fontSize: '5em',
          textAlign: 'left',
          marginLeft: 50,
          fontFamily: "ubuntu",
          color: '#253031'
        }}>Welcome to AB Matrimony</h1>
        <h1 style={{
          fontSize: '2em',
          fontFamily: "ubuntu",
          textAlign: 'right',
          color: '#C6E0FF'
        }}>-Find your perfect match with us!</h1>
      </div>
      <div className="right-side">
        <div className="form-box">
          {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </div>
      </div>
    </div>
  );
}

export default App;
