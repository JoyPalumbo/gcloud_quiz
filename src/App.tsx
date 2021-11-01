import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import gcloud from './gcloud.png'
import './App.css';
import Questions from './components/Questions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gcloud} className="App-logo" alt="logo" />
        <h2>Gcloud Quiz </h2>

        <Questions />
      </header>
    </div>
  );
}

export default App;
