import React, { Component } from 'react';
import VistaSupervisor from './components/VistaSupervisor';
import './App.css';
import ImportDoctor from './data/ImportDoctor';
import Supervisora from './data/Supervisora'
import ImportPatient from './data/ImportPatient'


class App extends Component {
  render() {
    return (
      <div className="App">
        <VistaSupervisor/>
        <ImportDoctor />

        <Supervisora />
        <ImportPatient />
      </div>
    );
  }
}

export default App;
