import React, { Component } from 'react';
import DatosUsuario from './DatosUsuario';
import PacientesVigentes from './PacientesVigentes';
import Supervisora from './../../../data/Supervisora';

class VistaFiltrada extends Component {
	render() {
    return (
      <div>
        <DatosUsuario/>
        <PacientesVigentes/>
				<Supervisora />
      </div>
    );
  }
}

export default VistaFiltrada;