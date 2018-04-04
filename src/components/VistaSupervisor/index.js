import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Filtros from './Filtros';
import VistaFiltrada from './VistaFiltrada';
import './styles.css';

class VistaSupervisor extends Component {
  render() {
    return (
      <div>
          <Grid>
            <Filtros/>
            <VistaFiltrada/>
          </Grid>
      </div>
    )
  }
}

export default VistaSupervisor;