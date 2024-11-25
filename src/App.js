import React from 'react';
import './App.css';
import Slideshow from './components/Slideshow';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portafolio</h1>
        <Slideshow />
      </header>
    </div>
  );
}

export default App;
