import React from 'react';
import logo from './logo.svg';
import './App.css';
import add from "@cloudbees/honeyui-icons/svg/add.svg";
import Icon from "@cloudbees/react-honeyui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Icon currentColor width={30} height={30} viewBox={add.viewBox} id={add.id} />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
