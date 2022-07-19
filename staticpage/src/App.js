
import './App.css';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import React from 'react';

function App() {
  const[color,changeColorState]=React.useState(true);

  function toggleColor(){
    changeColorState(!color)
  }

  return (
    <div className="container">
      <Navbar color={color} toggleColor={toggleColor}/>
      <MainContent color={color} />
    </div>
  );
}

export default App;
