import React, { Component } from 'react';
import {Grid, Row, Col, FormGroup, Glyphicon, FormControl, Button, Checkbox} from 'react-bootstrap';
import ImportPatient from './../../data/ImportPatient';

class Filtros extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}> <p>Fecha cita</p> </Col>
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
                <Col xs={12}> <p>Estado</p> </Col>
                <Col xs={12}> <Checkbox>Remember me</Checkbox> </Col>
                <Checkbox>Remember me</Checkbox>
                <Checkbox>Remember me</Checkbox>
            </Row>
        )
    }


}

export default Filtros;