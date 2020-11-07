import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Show from './Show';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>
            Welcomes
          </p>
          <p
            className="App-link"
            rel="noopener noreferrer"
          >
            Smart Air
          </p>
        </header>
      </div>
      <Show />
    </div>
  );
}

export default App;