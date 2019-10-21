import React from 'react'
import './SearchBox.css';

function SearchBox({ handleSearchSubmit, handleInputChange}) {
    return (
        <React.Fragment>
            <span class="search-title">Search by City Name</span>
            <form class="search-form" onSubmit={handleSearchSubmit}>
                <input 
                    class="search-input" 
                    type="search" 
                    placeholder="start typing..." 
                    onChange={handleInputChange} />
                <button 
                    class="search-submit" 
                    type="submit">
                    Submit
                </button>
            </form>
        </React.Fragment>
    )
}

export default SearchBox
