import React from 'react'



function Geolocation({getUserLocation}) {
    return (
        <form onSubmit={getUserLocation}>
            <button type="submit">Use Device Location</button>
        </form>
    )
}

export default Geolocation;
