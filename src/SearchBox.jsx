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
      inputExpanded: { width: "100%", paddingLeft: "20px", border: "2px solid currentColor" },
      btnExpanded: { right: "7px", marginTop: "7px", transform: "translateX(0%)" },
      isExpanded: true
    });
    this.searchInput.current.focus();

    console.log("expanding... focusing...");
  }

  render() {
    const { handleSearchSubmit, handleInputChange } = this.props;
    const { inputExpanded, btnExpanded, isExpanded } = this.state;
    return (
      <div className="SearchBox">
        <h2 className="search-title">Search by City Name</h2>
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
            {/* <img className="search-icon" src={icon} alt="search icon"/> */}
            {/* <svg class="search-icon" viewBox="0 0 486 486" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="search-icon__handle" d="M471.882 407.567L360.567 296.243C343.981 322.038 322.031 343.977 296.236 360.564L407.56 471.888C425.332 489.656 454.147 489.656 471.881 471.888C489.654 454.149 489.654 425.334 471.882 407.567Z" fill="white"/>
              <path class="search-icon__glass" d="M363.909 181.955C363.909 81.473 282.44 0 181.956 0C81.474 0 0.00100708 81.473 0.00100708 181.955C0.00100708 282.437 81.474 363.906 181.956 363.906C282.44 363.906 363.909 282.437 363.909 181.955ZM181.956 318.416C106.704 318.416 45.491 257.208 45.491 181.956C45.491 106.704 106.704 45.491 181.956 45.491C257.206 45.491 318.424 106.704 318.424 181.956C318.424 257.208 257.206 318.416 181.956 318.416Z" fill="white"/>
              <path class="search-icon__glare" d="M75.817 181.955H106.139C106.139 140.152 140.153 106.141 181.955 106.141V75.816C123.438 75.816 75.817 123.437 75.817 181.955Z" fill="white"/>
            </svg> */}

            <svg class="search-icon" width="486" height="486" viewBox="0 0 486 486" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="search-icon__handle" d="M471.882 407.567L360.567 296.243C343.981 322.038 322.031 343.977 296.236 360.564L407.56 471.888C425.332 489.656 454.147 489.656 471.881 471.888C489.654 454.149 489.654 425.334 471.882 407.567Z" fill="white"/>
              <path class="search-icon__glass" d="M363.909 181.955C363.909 81.473 282.44 0 181.956 0C81.474 0 0.00100708 81.473 0.00100708 181.955C0.00100708 282.437 81.474 363.906 181.956 363.906C282.44 363.906 363.909 282.437 363.909 181.955ZM181.956 318.416C106.704 318.416 45.491 257.208 45.491 181.956C45.491 106.704 106.704 45.491 181.956 45.491C257.206 45.491 318.424 106.704 318.424 181.956C318.424 257.208 257.206 318.416 181.956 318.416Z" fill="white"/>
              <path class="search-icon__glare" fill-rule="evenodd" clip-rule="evenodd" d="M76 182.001L102.501 182.002C102.501 138.162 138.161 102.502 182.001 102.502V76C123.463 76 76 123.464 76 182.001Z" fill="white"/>
            </svg>


          </button>
          
        </form>
      </div>
    )
  }
}

export default SearchBox
