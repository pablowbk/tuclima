import React from 'react'



function Geolocation({getLocation}) {
    return (
        <form onSubmit={getLocation}>
            <button type="submit">Use Device Location</button>
        </form>
    )
}

export default Geolocation
