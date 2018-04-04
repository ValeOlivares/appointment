import React, { Component } from 'react';
import Filtros from './Filtros';
import VistaFiltrada from './VistaFiltrada';
import './styles.css';

class VistaSupervisor extends Component {
  render() {
    return (
      <div>
        <VistaFiltrada/>
      </div>
    )
  }
}

export default VistaSupervisor;