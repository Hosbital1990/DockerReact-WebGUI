import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div id="root">
      <header className="navbar">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <div className="main-container">
        <div className="buttons-container">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
          <button>Button 5</button>
        </div>
        <div className="content-container">
          <h1>Welcome to HAS Application Service</h1>
          <div className="media-container">
            <video controls>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src="/image.jpg" alt="Hosbital" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
