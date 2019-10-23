import React from 'react'
import './Results.css';

function Results({data}) {
  return (
    <div className="Results">
      <h3>Showing results for:</h3>
      <p>{data[0].city_name}</p>
      <p><span>{data[0].temp}</span> &#8451;</p>
      <p>{data[0].weather.description}</p>
      <p>feels like: <span>{data[0].app_temp}</span> &#8451;</p>
      <p>wind: <span>{Math.round(data[0].wind_spd * 3.6)}</span> km/h, <span>{data[0].wind_cdir}</span></p>
      <p>clouds: <span>{data[0].clouds}</span>%</p>
      <p>hum: <span>{data[0].rh}</span>%</p>
      <p>wind direction: 
      </p>

      <svg version="1.1" viewBox="0 0 100 100">
        <g transform={`rotate(${data[0].wind_dir},50,50)`}>
          <path 
            d="m50,0 -20,30 16,-3 -3,63 14,0 -3,-63 16,3 -20,-30z" 
            fill="black" 
            strokeWidth="0">
          </path>
        </g>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" class="arrow" viewBox="0 0 74 74">
        <g fill="#19AEC2" transform={`rotate(${data[0].wind_dir},50,50)`}>
          <path d="M36.5 29.636L26 22l10.5 32L47 22z"></path>
        </g>
      </svg>
    </div>
  )
}

export default Results
