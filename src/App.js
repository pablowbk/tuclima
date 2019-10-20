import React, {Component} from 'react';
import './App.css';
import {icons} from './icons/icons-list';

import Geolocation from './Geolocation';

var navLanguage = navigator.language.match(/^[a-zA-Z]{2}/).join("");
const KEY = "22c690b4466444579f8adc70e937c135";
 //weatherbit api key
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      defaultURL: "https://api.weatherbit.io/v2.0/current?",
      data: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearchSubmit(event) {
    const { defaultURL, query } = this.state;
    event.preventDefault();
    fetch(`${defaultURL}city=${query}&key=${KEY}&lang=${navLanguage}`)
      .then(response => response.json())
      .then(jsonData => {
        this.setState({ data: jsonData.data, isLoaded: true, apiError: false })
        console.log(jsonData.data[0]);
      })
  }


  componentDidMount() {

  }

  render() {
    const {query, data} = this.state;
    return (
      <div className="App">
        <h1>TuClima 1.2.0</h1>
        
        <form action="" onSubmit={this.handleSearchSubmit}>
          <input type="search" placeholder="start typing..." onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        {
          data[0] 
          ? (
            <div className="results">
              <h3>Showing results for:</h3>
              <p>{data[0].city_name}</p>
              <p>temp: <span>{data[0].temp}</span> °C</p>
              <p>feels like: <span>{data[0].app_temp}</span> °C</p>
              <p>wind: <span>{Math.round(data[0].wind_spd * 3.6)}</span> km/h, <span>{data[0].wind_cdir}</span></p>
              <p>clouds: <span>{data[0].clouds}</span>%</p>
              <p>hum: <span>{data[0].rh}</span>%</p>

            </div>
            )
          : null
        }
        {/* <Geolocation getLocation={this.getDeviceLocation}/> */}
      </div>
    );

  }
}

export default App;
