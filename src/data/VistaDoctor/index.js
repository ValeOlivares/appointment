import React, { Component } from 'react';
import Doctor from './Doctor';
import DatosUsuario from './../../components/VistaSupervisor/VistaFiltrada/DatosUsuario';
import PacientesVigentes from './../../components/VistaSupervisor/VistaFiltrada/PacientesVigentes';

export default class VistaDoctor extends Component {
  render() {
    return(
      <div>
        <DatosUsuario />
        <PacientesVigentes />
        <Doctor />
      </div>
    )
  }
}