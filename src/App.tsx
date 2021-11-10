import React from 'react';
import './App.css';
import Home from './components/Home'
import Resources from './components/Resources'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
// import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

interface AppeProps {
  // name: string,
 }


const App: React.FC<AppeProps> = () => {

// function App() {
  return (
    <div className="App">
        <div className="App-header">
   
        <div className='container'>
          {/* !!! Due to newest version of react-router-dom + typescript had to use BrowserRouter and had to change component to element */}
      {/* BrowserRouter has to have main parent element such as a div tag */}
      <BrowserRouter>
      <div> 
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        </div>
    </BrowserRouter>
  
    </div>
    </div>
    </div>
  );
}

export default App;
