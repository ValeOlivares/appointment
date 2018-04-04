import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import DatosUsuario from './DatosUsuario';
import PacientesVigentes from './PacientesVigentes';
import Supervisora from './../../../data/Supervisora';
import Doctor from './../../../data/Doctor';
import ImportPatient from './../../../data/ImportPatient';

class VistaFiltrada extends Component {
	render() {
    return (
      <div>
				<Grid>
					<DatosUsuario/>
        	<PacientesVigentes/>
				  <Supervisora />
          <Doctor />
					<ImportPatient />
				</Grid>
      </div>
    );
  }
}

export default VistaFiltrada;