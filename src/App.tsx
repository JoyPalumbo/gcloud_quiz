import React from 'react';
// import logo from './logo.svg';
import gcloud from './gcloud.png'
import './App.css';
import Home from './components/Home'
import Resources from './components/Resources'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
// import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

interface AppeProps {
  // name: string,
 }


const App: React.FC<AppeProps> = (props) => {

// function App() {
  return (
    <div className="App">
        <div className="App-header">
        {/* <Navbar /> */}
        <div className='container'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
    </BrowserRouter>
  
    </div>
    </div>
    </div>
  );
}

export default App;
