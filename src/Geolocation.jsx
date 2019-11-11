import React from 'react';
import './Geolocation.css';
// import locationIcon from './media/location.svg';



function Geolocation({getUserLocation, isLoading, geolocError, geolocErrorMsg}) {
  return (
    <form className="Geolocation" onSubmit={getUserLocation}>
      <h2 className="search-title">Use Device Location</h2>
      <button className="getLocation-btn" type="submit">
        <svg className="location-icon" viewBox="0 0 485 485" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="inner-circle" cx="242.5" cy="242.5" r="64.1261" fill="#fff"/>
          <path className="outer-circle" fillRule="evenodd" clipRule="evenodd"
            d="M242.5 383.283C320.252 383.283 383.283 320.252 383.283 242.5C383.283 164.748 320.252 101.717 242.5 101.717C164.748 101.717 101.717 164.748 101.717 242.5C101.717 320.252 164.748 383.283 242.5 383.283ZM242.5 340.532C296.642 340.532 340.532 296.642 340.532 242.5C340.532 188.358 296.642 144.468 242.5 144.468C188.358 144.468 144.468 188.358 144.468 242.5C144.468 296.642 188.358 340.532 242.5 340.532Z"
            fill="#fff" />
          <g className="outer-lines">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M417.298 263.875C418.309 256.641 418.831 249.26 418.831 241.763C418.831 234.775 418.378 227.887 417.497 221.125L470.5 221.125C478.508 221.125 485 227.616 485 235.625V249.375C485 257.384 478.508 263.875 470.5 263.875H417.298ZM69.2553 263.875H14.5C6.49188 263.875 0 257.384 0 249.375V235.625C0 227.616 6.49187 221.125 14.5 221.125L69.0563 221.125C68.1757 227.887 67.7222 234.775 67.7222 241.763C67.7222 249.26 68.2441 256.641 69.2553 263.875Z"
              fill="#fff" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M263.875 67.7018C256.641 66.6906 249.26 66.1686 241.763 66.1686C234.775 66.1686 227.887 66.6221 221.125 67.5027L221.125 14.5C221.125 6.49188 227.617 7.74149e-08 235.625 1.72911e-07L249.375 3.36887e-07C257.384 4.32383e-07 263.875 6.49188 263.875 14.5L263.875 67.7018ZM263.875 415.745L263.875 470.5C263.875 478.508 257.384 485 249.375 485L235.625 485C227.617 485 221.125 478.508 221.125 470.5L221.125 415.944C227.887 416.824 234.775 417.278 241.763 417.278C249.26 417.278 256.641 416.756 263.875 415.745Z"
              fill="#fff" />
          </g>
        </svg>
      </button>
    </form>
  )
}

export default Geolocation;
