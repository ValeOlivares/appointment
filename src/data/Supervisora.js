import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

//const url = 'https://patricia.davila.cl/data_clinic/json/supervisora/161988464';

class Supervisora extends Component {
  constructor() {
    super();
    this.state = {
      supervisor: [],
    }
  }
  componentDidMount() {
    axios.get(`http://patricia.davila.cl/data_clinic/json/doctor/161988464`)
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then((data) => {
      console.log(data);
      this.setState({supervisor: data})
    });
  }

  render() {
    return(
      <div>hola</div>
    )
  }
}

export default Supervisora;