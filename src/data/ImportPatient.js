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
                <p>Pepito se atendió con {pat.professional_name} en {pat.clinic}</p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

