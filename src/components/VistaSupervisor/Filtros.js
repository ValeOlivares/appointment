import React, { Component } from 'react';
import { Row, Col, FormGroup, Glyphicon, FormControl, Button, Checkbox, InputGroup} from 'react-bootstrap';

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
                <Col xs={12} className="appointmentState lastState"><Checkbox>Citas anuladas por profesional</Checkbox></Col>
                <Col xs={12}> <p className="filterTitle">Paciente</p> </Col>
                <Col xs={12}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                            <Button disabled><Glyphicon glyph="search" /></Button>
                            </InputGroup.Button>
                            <FormControl type="text" placeholder="Ingresar rut o nombre" />
                        </InputGroup>
                    </FormGroup>
                </Col>
               <Col xs={12}> <p className="filterTitle">Profesional</p> </Col>
               <Col xs={12}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                            <Button disabled><Glyphicon glyph="search" /></Button>
                            </InputGroup.Button>
                            <FormControl type="text" placeholder="Nombre profesional" />
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col xs={12}> <p className="filterTitle">Especialidad</p> </Col>
                <Col xs={12}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                            <Button disabled><Glyphicon glyph="search" /></Button>
                            </InputGroup.Button>
                            <FormControl type="text" placeholder="Especialidad" />
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col xs={12}> <p className="filterTitle">Prestación</p> </Col>
                <Col xs={12}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                            <Button disabled><Glyphicon glyph="search" /></Button>
                            </InputGroup.Button>
                            <FormControl type="text" placeholder="Prestación" />
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col xs={12}> <p className="filterTitle">Contexto</p> </Col>
                <Col xs={4}> 
                  <FormGroup>
                    <Button>Clínica <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={4}> 
                  <FormGroup>
                    <Button>Centro <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={4}> 
                  <FormGroup>
                    <Button>Edificio <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={4}> 
                  <FormGroup>
                    <Button>Piso <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={4}> 
                  <FormGroup>
                    <Button>Box <Glyphicon glyph="menu-down" /></Button>
                  </FormGroup>
                </Col>
                <Col xs={12}><Button className="filterBtn">Aplicar filtros</Button></Col>
            </Row>
        )
    }
}

export default Filtros;