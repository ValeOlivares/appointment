import React, { Component } from 'react';
import VistaSupervisor from './components/VistaSupervisor';
import './App.css';
import ImportPatient from './data/ImportPatient';
import Doctor from './data/Doctor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VistaSupervisor/>
        <ImportPatient />
        <Doctor />
      </div>
    );
  }
}

export default App;
