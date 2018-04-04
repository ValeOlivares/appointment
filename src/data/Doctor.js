import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


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
      <div>
      {this.state.docData.map((docData, index) => {
        return (
        <Grid fluid>
          <Row key={index} className="show-grid">
            <Col xs={4}>{docData.reserved_hour}</Col>
            <Col xs={4}>{docData.clinic}</Col>
            <Col xs={4}>{docData.state}</Col>
          </Row>
          <Row className="show-grid">
            <Col xs={4}>{docData.type_pacient}</Col>
            <Col xs={4}>{docData.name_pacient}</Col>
            <Col xs={4}>{docData.probability}</Col>
          </Row>
        </Grid>
        )
      })}
      </div>
    )
  }
}