import React, { Component } from 'react';
import DatosUsuario from './DatosUsuario';
import PacientesVigentes from './PacientesVigentes';
import PlantillaDatos from './PlantillaDatos';

class VistaFiltrada extends Component {
	render() {
    return (
      <div>
        <DatosUsuario/>
        <PacientesVigentes/>
        <PlantillaDatos/>
      </div>
    );
  }
}

export default VistaFiltrada;