import React, { Component } from 'react';


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
      <section>
        <div>
          {this.state.pat.map((pat, index) => {
            return (
              <div className="allDataCont" key={index}>
                <p>{pat.reserved_date}</p>
                <p>{pat.reserved_hour}</p>
                <p>{pat.type_pacient}</p>
                <p>{pat.state}</p>
                <p>{pat.clinic} / {pat.atention}</p>
                <p>{pat.probability}</p>
                <p>{pat.professional_name}</p>
                <p>{pat.professional_specialty}</p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

