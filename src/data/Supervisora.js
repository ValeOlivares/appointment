import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import confirmada from './dataImg/confirmada.png';
import gestionado from './dataImg/gestionado.png';


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
      <section>
        <div>
          {this.state.allData.map((allData, index) => {
            return (
              <Grid>
                <div className="allDataCont" key={index}>
                  <Row className="show-grid">
                    <Col xs={8} >
                      <p> {allData.reserved_date} {allData.reserved_hour} </p>
                    </Col>
                    <Col xs={4}>
                      {(allData.state == "confirmada") ? <Image src={confirmada} responsive /> : <Image src={gestionado} responsive />}
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={8}>
                      <p> {allData.atention} </p>
                    </Col>
                    <Col xs={4}>
                      <p>{allData.probability}</p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={2}>
                      <p>{allData.type_pacient}</p>
                    </Col>
                    <Col xs={10}>
                      <p>{allData.name_pacient}</p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={8}>
                      <p> {allData.professional_name} </p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={8}>
                      <p>{allData.professional_speciality}</p>
                    </Col>
                    <Col xs={4}>
                      <p>{allData.price}</p>
                    </Col>
                  </Row>
                </div>
              </Grid>
            )
          })}
        </div>
      </section>
    )
  }
}