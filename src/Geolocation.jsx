import React from 'react';
// import locationIcon from './media/location.svg';



function Geolocation({getUserLocation}) {
    return (
        <form onSubmit={getUserLocation}>
            <button type="submit">Use Device Location</button>
        </form>
    )
}

export default Geolocation;
