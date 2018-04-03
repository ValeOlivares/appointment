import React, { Component } from 'react';

//const url = 'https://patricia.davila.cl/data_clinic/json/supervisora/161988464';

class Supervisora extends Component {
  constructor() {
    super();
    this.state = {
      supervisor: [],
    }
  }
  componentDidMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/paciente/161988464`)
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then(data => this.setState({supervisor: data}));
  }


  render() {
    return(
      <div>hola</div>
    )
  }
}

export default Supervisora;