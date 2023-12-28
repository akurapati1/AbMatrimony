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
      <div className="left-side">
        <h1 style={{ fontSize: '5em' }}>Welcome to AB Matrimony</h1>
        <h3 fontSize="15px">Find your perfect match with us!</h3>
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
