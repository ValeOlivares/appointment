import React, { Component } from 'react';


//const url = 'https://patricia.davila.cl/data_clinic/json/supervisora/161988464';


export default class Supervisora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }

  componentWillMount() {
    fetch(`http://patricia.davila.cl/data_clinic/json/supervisora/161988464`)
    .then(function(response){
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
              <div className="allDataCont" key={index}>
                <p> {allData.reserved_date} {allData.reserved_hour} <span>{allData.state}</span></p>
                <p> {allData.atention} <span>{allData.probability}</span></p>
                <p> <span>{allData.type_pacient}</span>  {allData.name_pacient}</p>
                <p> {allData.professional_name} <br/>
                {allData.professional_speciality}</p> <span>{allData.price}</span>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}