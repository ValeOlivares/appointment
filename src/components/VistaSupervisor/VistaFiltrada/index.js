import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import DatosUsuario from './DatosUsuario';
import PacientesVigentes from './PacientesVigentes';
import Supervisora from './../../../data/Supervisora';
import ImportPatient from './../../../data/ImportPatient';
import VistaDoctor from './../../../data/VistaDoctor';

class VistaFiltrada extends Component {
	render() {
    return (
      <div>
				<Grid>
					<DatosUsuario/>
        	<PacientesVigentes/>
				  <Supervisora />
          <VistaDoctor />
					<ImportPatient />
				</Grid>
      </div>
    );
  }
}

export default VistaFiltrada;