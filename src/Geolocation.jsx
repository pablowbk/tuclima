import React from 'react';
import './Geolocation.css';
import locationIcon from './media/location.svg';



function Geolocation({getUserLocation, isLoading, geolocError, geolocErrorMsg}) {
  return (
    <form class="Geolocation" onSubmit={getUserLocation}>
      <h2 className="search-title">Use Device Location</h2>
      <button class="getLocation-btn" type="submit">
        <img src={locationIcon} alt="device location icon" class="location-icon"/>
      </button>
    </form>
  )
}

export default Geolocation;
