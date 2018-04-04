import React, { Component } from 'react';
import VistaSupervisor from './components/VistaSupervisor';
import Login from './components/Login/Login'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <VistaSupervisor/>
      </div>
    );
  }
}

export default App;
