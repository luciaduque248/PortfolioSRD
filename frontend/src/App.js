import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;