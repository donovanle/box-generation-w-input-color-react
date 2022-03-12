import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Colorform from './components/colorform';
import Colordisplay from './components/colordisplay';
import './components/styles.css';

function App() {
  const [colors, setColors]= useState([])

  const handleNewColor = (newColor)=>{
    setColors([...colors, newColor])
  }


  return (
    <div className="App">
        <Colorform handleNewColor={handleNewColor}/>
        <Colordisplay allcolors={colors}/>
    </div>
  );
}

export default App;
