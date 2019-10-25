import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Results from './Results';

var navLanguage = navigator.language.match(/^[a-zA-Z]{2}/).join("");
const KEY = "22c690b4466444579f8adc70e937c135";
 //weatherbit api key
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      defaultURL: "https://api.weatherbit.io/v2.0/current?",
      data: {},
      isLoaded: false,
      apiCallError: false,
      apiCallErrorMsg: "",
      failedQuery: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  // get value from search input and store in state
  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  // use the search query to perform fetch request to api, adding KEY and lang params
  handleSearchSubmit(event) {
    const { defaultURL, query } = this.state;
    event.preventDefault();
    console.log("sending request to API...");
    if (query.length > 0) {
      fetch(`${defaultURL}city=${query}&key=${KEY}&lang=${navLanguage}`)
        .then(response => response.json())
        .then(jsonData => { // if fetch is successful, update state with json data
          this.setState({ data: jsonData.data, isLoaded: true, apiCallError: false });
          console.log(jsonData.data[0]);
          console.log("request complete!");
        })
        .catch(err => { // if search fails, update state and store message
          this.setState({apiCallError: true, apiCallErrorMsg: err, failedQuery: query});
          console.log(err);
        })
      }
  }


  componentDidMount() {

  }

  render() {
    const { failedQuery, data, apiCallError, query } = this.state;
    return (
      <div className="App">
        
        <SearchBox 
          handleSearchSubmit={this.handleSearchSubmit}
          handleInputChange={this.handleInputChange}
          query={query}
        />

        { // inform results based on query
          data[0] && !apiCallError
          ? <Results data={data} />
          : null
        }

        { // Notify why search failed.
          apiCallError
          ? <h3>City "<span>{failedQuery}</span>" not found.</h3>
          : null
        }
      </div>
    );
  }
}

export default App;
