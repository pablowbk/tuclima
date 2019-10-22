import React, {Component} from 'react'
import './SearchBox.css';
import icon from './search-icon.svg';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      inputExpanded: {},
      btnExpanded: {}
    }

    this.expandSearchBox = this.expandSearchBox.bind(this);
    this.searchInput = React.createRef()
  }

  expandSearchBox(event) {
    event.preventDefault();
    this.setState({
      inputExpanded: { width: "100%", paddingLeft: "20px", border: "2px solid" },
      btnExpanded: { right: "7px" },
      isExpanded: true
    });
    this.searchInput.current.focus();

    console.log("expanding... focusing...");
  }

  render() {
    const { handleSearchSubmit, handleInputChange } = this.props;
    const { inputExpanded, btnExpanded, isExpanded, inputFocus } = this.state;
    return (
      <div className="SearchBox">
        <span className="search-title">Search by City Name</span>
        <form 
          className="search-form" 
          onSubmit={isExpanded ? handleSearchSubmit : null}>
          <input
            className="search-input"
            type="search"
            placeholder="start typing..."
            onChange={handleInputChange}
            style={inputExpanded}
            ref={this.searchInput} />
          <button 
            className={isExpanded ? `search-submit moveRight` : `search-submit`}
            style={isExpanded ? btnExpanded : null }
            onClick={isExpanded ? handleSearchSubmit : this.expandSearchBox}>
            <img className="search-icon" src={icon} alt="search icon"/>
          </button>
          
        </form>
      </div>
    )
  }
}

export default SearchBox
