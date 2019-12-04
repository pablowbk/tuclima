import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Results from './Results';
import LoaderRain from './LoaderRain';
import Geolocation from './Geolocation';
import Forecast from './Forecast';

// globals
const semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];
var navLanguage = navigator.language.match(/^[a-zA-Z]{2}/).join("");
const KEY = "22c690b4466444579f8adc70e937c135"; //weatherbit api key
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      searchInput: "",
      defaultURL: "https://api.weatherbit.io/v2.0/current?",
      forecastURL: "https://api.weatherbit.io/v2.0/forecast/daily?",
      data: {},
      forecastData: {},
      forecastReady: false,
      isLoading: false,
      apiCallError: false,
      apiCallErrorMsg: "",
      failedQuery: "",
      geolocationEnabled: false,
      geolocError: false,
      geolocErrorMsg: "",
      latitude: "",
      longitude: "",
      isExpanded: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.getForecast = this.getForecast.bind(this);
    this.getWeekDay = this.getWeekDay.bind(this);
  }

  // get week day name from UNix timestamp
  getWeekDay(fecha) {
    var weekDays = navLanguage.includes("es") ? semana : week;
    return weekDays[new Date(fecha * 1000).getDay()];
  }

  // getForecast
  getForecast(forecastQuery) {
    const { forecastURL, searchInput } = this.state;
    const query = searchInput ? `city=${forecastQuery}` : forecastQuery;
    fetch(`${forecastURL}${query}&key=${KEY}&lang=${navLanguage}&days=7`)
      .then(response => response.json())
      .then(jsonData => {
        this.setState({forecastData: jsonData.data, forecastReady: true})
        // jsonData.data.map(day => console.log("Forecast days: \n", this.getWeekDay(day.ts)))
        console.log("Forecast Data Object: \n", jsonData.data)
      })
      .catch(err => console.log(err))
  }

  // get value from search input and store in state
  handleInputChange(event) {
    this.setState({ query: event.target.value, searchInput: event.target.value });
  }

  // use the search query to perform fetch request to api, adding KEY and lang params
  handleSearchSubmit(event) {
    const { defaultURL, query, searchInput } = this.state;
    event.preventDefault();
    if (searchInput.length > 0) { // if condition will prevent the form from submitting if the input box is empty
      console.log("sending request to API...");
      this.setState(prevState => ({isLoading: true, query: searchInput}));
      fetch(`${defaultURL}city=${searchInput}&key=${KEY}&lang=${navLanguage}`)
        .then(response => response.json())
        .then(jsonData => { // if fetch is successful, update state with json data
          this.setState({ data: jsonData.data, isLoading: false, apiCallError: false });
          console.log(jsonData.data[0]);
          console.log("request complete!");
        })
        .catch(err => { // if search fails, update state and store message
          this.setState({apiCallError: true, apiCallErrorMsg: err, failedQuery: query});
          console.log(err);
        }); // end of fetch block
      
      this.getForecast(searchInput)

      } // end of If Block
  }


  //get geolocation
  getUserLocation(e) {
    const { defaultURL } = this.state;
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        // console.log(position); // log position object returned by geoloc api
        // let latitude = position.coords.latitude;
        // let longitude = position.coords.longitude;
        this.setState({
          searchInput: "",
          isLoading: true,
          geolocationEnabled: true,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          query: `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        });

      // console.log(this.state.latitude, this.state.longitude)
      // console.log(this.state.query)
      console.log("sending request to API using Device Location...");
      fetch(`${defaultURL}${this.state.query}&lang=${navLanguage}&key=${KEY}`)
        .then(response => response.json())
        .then(jsonData => {
          this.setState({
            data: jsonData.data,
            isLoading: false,
            apiCallError: false
          })
          console.log("Current weather: \n", jsonData.data[0]);
          console.log("request complete!");
        }) // then block end
        .catch(err => { // if search fails, update state and store message
          this.setState({
            apiCallError: true,
            apiCallErrorMsg: err,
            failedCoords: `${this.state.latitude}, ${this.state.longitude}`
          });
          console.log(err);
        }) // catch end
      this.getForecast(this.state.query);
      }) // getCurrentPosition End

    } // if block end
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  render() {
    const {
      failedQuery,
      data,
      apiCallError,
      query,
      isLoading,
      geolocError,
      geolocErrorMsg,
      latitude,
      isExpanded,
      forecastData,
      forecastReady
    } = this.state;
    return (
      <div className="App">
        
        {data[0] && !isLoading ? <span className="status">Display results</span> : <span className="status">Show searchbar</span>}

        
        <SearchBox 
          handleSearchSubmit={this.handleSearchSubmit}
          handleInputChange={this.handleInputChange}
          isExpanded={isExpanded}
          query={query}
          latitude={latitude}
          />

        <Geolocation 
          getUserLocation={this.getUserLocation}
          isLoading={isLoading}
          geolocError={geolocError}
          geolocErrorMsg={geolocErrorMsg}          
        />

        { isLoading ? <LoaderRain /> : null }

        { // inform results based on query
          data[0] && !apiCallError && !isLoading
          ? <Results data={data} />
          : null
        }

        { // display forecasts data
          data[0] && !apiCallError && !isLoading
          ? <Forecast data={forecastData} ready={forecastReady} getWeekday={this.getWeekDay
          } />
          : null
        }

        { // Notify why search failed.
          apiCallError
          ? <h3>City "<span className="failedQuery">{failedQuery}</span>" not found.<br/>Please try again...</h3>
          : null
        }


    </div>
    );
  }
}

export default App;
