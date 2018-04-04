import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import confirmada from './dataImg/confirmada.png';
import gestionado from './dataImg/gestionado.png';
import './ImportPatient.css'

export default class ImportDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pat : []
    }
  }

  componentWillMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/paciente/161988464`)
    .then(function(response){
      //console.log(response);
      return response.json();
    })
    .then(response => {
      const pat = response.data;
      console.log(pat);
      this.setState({ pat });
    });
  }

  render() {
    return (
        <div>
          {this.state.pat.map((pat, index) => {
            return (
              <Grid fluid>
                <Row key={index} className="show-grid">
                <Col xs={4}><p className="ReservedDate">{pat.reserved_date}</p></Col>
                <Col xs={4}><p className="ReservedHour">{pat.reserved_hour}</p></Col>
                <Col xs={4}><p className="PacientType">{pat.type_pacient}</p></Col>
                </Row>
                </Grid>
                <p className="State">{pat.state}</p> <span>{(pat.state == "confirmada")? <img src={confirmada}/> :  <img src={gestionado}/> }<span/>
                <p className="Clinic">{pat.clinic} / {pat.atention}</p>
                <p className="Probability">{pat.probability}</p>
                <p className="ProfessionalName">{pat.professional_name}</p>
                <p className="ProfessionalSpecialty">{pat.professional_specialty}</p>
                <i className="fas fa-ellipsis-v MenuIcon"></i>
            )
          })}
      </div>
    )
  }

  /*render() {
    return(
      <div>
      {this.state.pat.map((pat, index) => {
        return (
        <Grid fluid>
          <Row key={index} className="show-grid">
            <Col xs={4}>{pat.reserved_hour}</Col>
            <Col xs={4}>{pat.clinic}</Col>
            <Col xs={4}>{pat.state}</Col>
          </Row>
          <Row className="show-grid">
            <Col xs={4}>{pat.type_pacient}</Col>
            <Col xs={4}>{pat.name_pacient}</Col>
            <Col xs={4}>{pat.probability}</Col>
          </Row>
        </Grid>
        )
      })}
      </div>
    )
  }*/






}

