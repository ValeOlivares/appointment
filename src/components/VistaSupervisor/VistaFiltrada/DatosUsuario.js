import React, { Component } from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';


class DatosUsuario extends Component {
    render() {
        return (
            <Row className="contInfoUser">
                <Col xs={10}>
                 <p className="userName">Dr. Ricardo Jorquera</p>
                 <p>Clínica MEDS</p>
                </Col>
                <Col xs={2}>
                    <Glyphicon glyph="option-vertical" className="verticalOptions"/>
                </Col>
            </Row>
        )
    }

}

export default DatosUsuario;