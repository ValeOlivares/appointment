import React, { Component } from 'react';


export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }


  componentDidMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/doctor/161988464`)
    .then(response => {
      //console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      let info = data.map((dodo) => {
        return(
          <div></div>
        )
      });
      this.setState({data: data.data})
      console.log("state", this.state.data);
    });
  }

  render() {
    const {doc} = this.state;
    return(
      <div>{this.state.doc}</div>
    )
  }
}