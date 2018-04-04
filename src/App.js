import React, { Component } from 'react';
import VistaSupervisor from './components/VistaSupervisor';
import ImportPatient from './data/ImportPatient'
import Doctor from './data/Doctor';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <VistaSupervisor/>
        <ImportPatient />
      </div>
    );
  }
}

export default App;
