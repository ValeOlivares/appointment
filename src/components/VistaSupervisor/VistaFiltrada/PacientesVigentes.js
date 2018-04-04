// Recibe datos filtrados 
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class PacientesVigentes extends Component {
    render() {
        return (
            <Row className="contVigentes">
                <p>11 pacientes vigentes</p>
            </Row>
        )
    }

}

export default PacientesVigentes;