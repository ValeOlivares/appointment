import React, { Component } from 'react';
import VistaSupervisor from './components/VistaSupervisor';
import './App.css';
import ImportDoctor from './data/ImportDoctor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VistaSupervisor/>
        <ImportDoctor />
      </div>
    );
  }
}

export default App;
