import React from 'react';
import './App.css';

// local imports below
import Display from './components/Display';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="display-container">
      <Display />
      </div>
    </div>
  );
}

export default App;
