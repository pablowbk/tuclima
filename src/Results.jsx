import React from 'react'
import './Results.css';

function Results({data, imperial}) {
  return (
    <div className="Results">
      <h2>{data[0].city_name}, {data[0].country_code}</h2>
      <div className="mainTemp">
        <img 
          className="mainTemp__icon"
          // src={`https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`} // fetching icon image from weatherbit site
          src={require(`./icons/${data[0].weather.icon}.png`)} // fetching icon image locally
          alt={`Weather Icon - ${data[0].weather.description}`}/>
        <p className="mainTemp__temp" 
          style={
              data[0].temp <= -10 ? {color: 'rgba(149, 136, 211,1)'}
              : data[0].temp <= 0
              ? {color: 'rgba(150, 208, 216,1)'}
              : data[0].temp <= 10
              ? {color: 'rgba(94, 143, 197,1)'}
              : data[0].temp <= 18
              ? {color: 'rgba(79, 139, 61,1)'}
              : data[0].temp <= 25
              ? {color: 'rgba(222, 177, 6,1)'}
              : data[0].temp <= 34
              ? {color: 'rgba(190, 65, 18,1)'}
              : data[0].temp > 34
              ? {color: 'rgba(138, 42, 10,1)'}
              : null
            }>
          <span>{Math.round(data[0].temp)}</span><span>{imperial ? "°F" : "°C"}</span>
        </p>
        <p className="mainTemp__cond">{data[0].weather.description}</p>
      </div>
      
      <div className="moreInfo">
        <p>ST: <span>{Math.round(data[0].app_temp)}</span><span>{imperial ? "°F" : "°C"}</span></p>
        <p>clouds: <span>{data[0].clouds}</span>%</p>
        <p>hum: <span>{data[0].rh}</span>%</p>
        <p>wind: 
          <span>{Math.round(data[0].wind_spd * 1.852)}</span> km/h, <span>{data[0].wind_cdir}</span> {/* // check for units!!! */}
        </p>

      </div>

      <svg className="More" viewBox="0 0 485 485" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="242.5" cy="242.5" r="242.5"/>
        <rect x="221" y="362" width="240" height="43" rx="10" transform="rotate(-90 221 362)" fill="white"/>
        <rect x="362.5" y="263.5" width="240" height="43" rx="10" transform="rotate(-180 362.5 263.5)" fill="white"/>
      </svg>


    </div>
  )
}

export default Results;
