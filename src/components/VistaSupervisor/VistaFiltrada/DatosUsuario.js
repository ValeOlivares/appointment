import React, { Component } from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';


class DatosUsuario extends Component {
    render() {
        return (



            <div>


            <Row className="contInfoUser">
                <Col xs={10}>
                 <p className="userName">Dr. Ricardo Jorquera</p>
                 <p>Clínica MEDS</p>
                </Col>
                <Col xs={2}>
                    <Glyphicon glyph="option-vertical" className="verticalOptions"/>
                </Col>
            </Row>


            <Row className="contDate">
            <Col xs={4}><p className="dateInfo">Dr. Jorquera</p></Col>
            <Col xs={7}><p className="dateInfo">Miércoles 4 de abril</p></Col>
            </Row>
            </div>

        )
    }

}

export default DatosUsuario;