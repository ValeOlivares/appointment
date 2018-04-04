import React, { Component } from 'react';
import DatosUsuario from './DatosUsuario';
import PacientesVigentes from './PacientesVigentes';
import Supervisora from './../../../data/Supervisora';
import Doctor from './../../../data/Doctor';

class VistaFiltrada extends Component {
	render() {
    return (
      <div>
        <DatosUsuario/>
        <PacientesVigentes/>
				<Supervisora />
        <Doctor />
      </div>
    );
  }
}

export default VistaFiltrada;