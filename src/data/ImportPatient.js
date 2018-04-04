import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import confirmada from './dataImg/confirmada.png';
import gestionado from './dataImg/gestionado.png';
import dados from './dataImg/dados.png';
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
        <Row>
          {this.state.pat.map((pat, index) => {
            return (
                <div className="allPatientCont" key={index}>
                  <Row>
                    <Col xs={4} >
                      <p className="ReservedDay">{pat.reserved_date} - <span className="ReservedHour"> {pat.reserved_hour}</span></p>
                    </Col>
                    <Col xs={3}>
                      <p className="PacientType">{pat.type_pacient}</p>
                    </Col>
                    <p className="show-grid"></p>
                    <Col xs={4}>
                      <span className="PatientState">{(pat.state === "confirmada")? <Image src={confirmada} className="img-responsive State" /> : <Image src={gestionado} className="img-responsive State"/>}</span>
                    </Col>
                  </Row>
                  <Row>
                   <Col xs={9}>
                      <p className="Clinic">{pat.clinic} / {pat.atention}</p>
                    </Col>
                    <Col xs={2} className="col3">
                      <span className="probabilityPat">{pat.probability}<span><Image src={dados} responsive className="dads" /></span></span>
                    </Col>
                    <Col xs={1} className="col3">
                      <span className="MenuIcon"><i className="fas fa-ellipsis-v"></i></span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <p className="ProfessionalName"> {pat.professional_name} </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={9}>
                      <p className="ProfessionalSpecialty">{pat.professional_speciality}</p>
                    </Col>
                    <Col xs={2}>
                      <p className="Price">{pat.price}</p>
                    </Col>
                  </Row>
                </div>
            )
          })}
        </Row>
    )
  }
}
/*

<p className="ReservedDate">{pat.reserved_date}</p>
<p className="ReservedHour">{pat.reserved_hour}</p>
<p className="PacientType">{pat.type_pacient}</p>
<p className="State">{pat.state}</p> <span>{(pat.state == "confirmada")? <img src={confirmada}/> :  <img src={gestionado}/> }</span>
<p className="Clinic">{pat.clinic} / {pat.atention}</p>
<p className="Probability">{pat.probability}</p>
<p className="ProfessionalName">{pat.professional_name}</p>
<p className="ProfessionalSpecialty">{pat.professional_specialty}</p>
<i className="fas fa-ellipsis-v MenuIcon"></i>
</div>*/