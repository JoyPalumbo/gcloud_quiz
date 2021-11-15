import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Resources from './components/Resources'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
// import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

interface AppeProps {
  // name: string,
 }


const App: React.FC<AppeProps> = () => {
  const [bodyColor, setColor] = useState<string>('#e9a2e9')

  const changeColor = (color: string) => {
    setColor(color);
    console.log("changing color from props", color)
   };

// function App() {
  return (
    <div className="App">
        <div style={{ background: bodyColor }} className="App-header">
   
        <div className='container'>
          {/* !!! Due to newest version of react-router-dom + typescript had to use BrowserRouter and had to change component to element */}
      {/* BrowserRouter has to have main parent element such as a div tag */}
      <BrowserRouter>
      <div> 
      <Navbar changeColor={changeColor}/>
        <Routes>
        <Route path="/" element={<Home propColor={bodyColor}/>} />
          <Route path="/resources" element={<Resources propColor={bodyColor}/>} />
          <Route path="/about" element={<About propColor={bodyColor}/>} />
        </Routes>
        </div>
    </BrowserRouter>
  
    </div>
    </div>
    </div>
  );
}

export default App;
