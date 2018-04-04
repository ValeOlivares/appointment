import React, { Component } from 'react';


export default class ImportDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perro : []
    }
  }

  componentDidMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/doctor/161988464`)
    .then(function(response){
      //console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
  }

  render() {
    return(
      <div>{this.state.perro}</div>
    )
  }
}