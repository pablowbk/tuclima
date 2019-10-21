import React from 'react'

function SearchBox({ handleSearchSubmit, handleInputChange}) {
    return (
        <form action="" onSubmit={handleSearchSubmit}>
            <input type="search" placeholder="start typing..." onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchBox
