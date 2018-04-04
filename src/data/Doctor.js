import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import { Grid, Row, Col, Image } from 'react-bootstrap';
import dados from './dataImg/dados.png';
import confirmada from './dataImg/confirmada.png';
import gestionado from './dataImg/gestionado.png';

import './../components/VistaDoctor/doctor.css';


export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docData: [],
    }
  }

  componentDidMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/doctor/161988464`)
    .then(function(response) {
      //console.log(response);
      return response.json();
    })
    .then(response => {
      const docData = response.data;
      console.log(docData);
      this.setState({docData});
    });
  }

  render() {
    return(
      <Row>
      {this.state.docData.map((docData, index) => {
        return (

        <Grid className="docDataStyle" fluid>
          <Row key={index} className="show-grid docDates">
            <Col xs={2} className="hour">{docData.reserved_hour}</Col>
            <Col xs={7} className="place">{docData.clinic}</Col>
            <Col xs={3}>{docData.state}</Col>
          </Row>
          <Row className="show-grid docPatient">
            <Col xs={2} className="typePat">{docData.type_pacient}</Col>
            <Col xs={7} className="namePat">{docData.name_pacient}</Col>
            <Col xs={3} className="probabilityPat">{docData.probability}</Col>

        <div className="docDataStyle">
          <Row key={index} className="show-grid docDates">
            <Col xs={2}>
              <p className="hour">{docData.reserved_hour}</p>
            </Col>
            <Col xs={7}>
              <p className="place">{docData.clinic}</p>
            </Col>
            <Col xs={3} className="col3">
              {(docData.state === "confirmada") ? <Image className="stateImg" src={confirmada} responsive /> : <Image className="stateImg" src={gestionado} responsive />}
            </Col>
          </Row>
          <Row className="show-grid docPatient">
            <Col xs={2}>
              <p className="typePat">{docData.type_pacient}</p>
            </Col>
            <Col xs={7}>
              <p className="namePat">{docData.name_pacient}</p>
            </Col>
            <Col xs={3} className="col3">
              <span className="probabilityPat">{docData.probability}<span><Image src={dados} responsive className="dads" /></span></span>
            </Col>

          </Row>
        </div>
        )
      })}
      </Row>
    )
  }
}