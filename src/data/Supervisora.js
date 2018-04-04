import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import confirmada from './dataImg/confirmada.png';
import gestionado from './dataImg/gestionado.png';
import dados from './dataImg/dados.png';
import './Supervisora.css';


//const url = 'https://patricia.davila.cl/data_clinic/json/supervisora/161988464';

export default class supervisora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }


  componentDidMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/supervisora/161988464`)

      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(response => {
        // console.log(response) // This works
        const allData = response.data;
        console.log(allData);
        this.setState({ allData });
      })
  }

  render() {
    return (
      <Row>
          {this.state.allData.map((allData, index) => {
            return (
                <div className="allDataCont" key={index}>
                  <Row>
                    <Col xs={7} >
                      <p className="ReservedDay"> {allData.reserved_date} <span className="ReservedHour">{allData.reserved_hour}</span> </p>
                    </Col>
                    <Col xs={4}>
                      <span className="PatientState">{(allData.state === "confirmada")? <Image src={confirmada} className="img-responsive State" /> : <Image src={gestionado} className="img-responsive State"/>}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={9}>
                      <p className="Clinic">{allData.clinic} / {allData.atention}</p>
                    </Col>
                    <Col xs={2}>
                      <span className="probabilityPat">{allData.probability}<span><Image src={dados} responsive className="dads" /></span></span>
                    </Col>
                    <Col xs={1} className="col3">
                      <span className="MenuIcon"><i className="fas fa-ellipsis-v"></i></span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={1}>
                      <p className="PacientType2">{allData.type_pacient}</p>
                    </Col>
                    <Col xs={9}>
                      <p className="PacientName">{allData.name_pacient}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <p className="ProfessionalName"> {allData.professional_name} </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={9}>
                      <p className="ProfessionalSpecialty">{allData.professional_speciality}</p>
                    </Col>
                    <Col xs={2}>
                      <p className="Prices">{allData.price}</p>
                    </Col>
                  </Row>
                </div>
            )
          })}
      </Row>
    )
  }
}