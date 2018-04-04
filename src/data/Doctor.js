import React, { Component } from 'react';


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
      <section>
        <div>
          {this.state.docData.map((docData, ind) =>{
            return(
              <div className="alldata" key="ind">
                <p>{docData.reserved_hour}<span></span> {docData.clinic}<span> {docData.state}</span></p>
                <p>{docData.type_pacient}<span> {docData.name_pacient}</span><span> {docData.probability}</span></p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}