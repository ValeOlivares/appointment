import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import DatosUsuario from './DatosUsuario';
import PacientesVigentes from './PacientesVigentes';
import Supervisora from './../../../data/Supervisora';
import Doctor from './../../../data/Doctor';

class VistaFiltrada extends Component {
	render() {
    return (
      <div>
				<Grid>
					<DatosUsuario/>
        	<PacientesVigentes/>
				  <Supervisora />
          <Doctor />
				</Grid>
      </div>
    );
  }
}

export default VistaFiltrada;