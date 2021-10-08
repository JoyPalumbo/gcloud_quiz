import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Questions />
      </header>
    </div>
  );
}

export default App;
