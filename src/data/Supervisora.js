import React, { Component } from 'react';


//const url = 'https://patricia.davila.cl/data_clinic/json/supervisora/161988464';


export default class Supervisora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sup : []
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
      <div>{this.state.sup}</div>
    )
  }
}