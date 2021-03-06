import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import dados from './../dataImg/dados.png';
import confirmada from './../dataImg/confirmada.png';
import gestionado from './../dataImg/gestionado.png';
import './doctor.css';
import './../../App.css';


export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docData: [],
    }
  }

  componentDidMount() {
    fetch(`https://patricia.davila.cl/data_clinic/json/doctor/161988464`)
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
        <div className="docDataStyle">
          <Row key={index} className="show-grid docDates">
            <Col xs={1}>
              <p className="hour">{docData.reserved_hour}</p>
            </Col>
            <Col xs={6}>
              <p className="place">{docData.clinic}</p>
            </Col>
            <Col xs={4} className="show-grid">
              <span className="PatientState">{(docData.state === "confirmada")? <Image src={confirmada} className="img-responsive State" /> : <Image src={gestionado} className="img-responsive State"/>}</span>
            </Col>
          </Row>
          <Row className="show-grid docPatient">
            <Col xs={1}>
              <p className="typePat">{docData.type_pacient}</p>
            </Col>
            <Col xs={8}>
              <p className="namePat">{docData.name_pacient}</p>
            </Col>
            <Col xs={2} className="col3">
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