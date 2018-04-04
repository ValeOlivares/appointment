import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, Glyphicon, FormControl, Button, Checkbox} from 'react-bootstrap';
import ImportPatient from './../../data/ImportPatient';

class Filtros extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}> <p className="filterTitle">Fecha cita</p> </Col>
                <Col xs={5} xsOffset={1}> 
                  <FormGroup>
                    <Button>Desde <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={5}> 
                  <FormGroup>
                    <Button>Hasta <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={12}> <p className="filterTitle">Estado</p> </Col>
                <Col xs={12} className="appointmentState"><Checkbox>Citas vigentes (todas)</Checkbox></Col>
                <Col xs={12} className="appointmentState"><Checkbox>Citas vigentes no confirmadas</Checkbox></Col>
                <Col xs={12} className="appointmentState"><Checkbox>Citas vigentes confirmadas</Checkbox></Col>
                <Col xs={12} className="appointmentState"><Checkbox>Citas anuladas por paciente</Checkbox></Col>
                <Col xs={12} className="appointmentState"><Checkbox>Citas anuladas por profesional</Checkbox></Col>
                <Col xs={12}> <p className="filterTitle">Paciente</p> </Col>
            </Row>
        )
    }


}

export default Filtros;