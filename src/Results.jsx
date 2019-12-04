import React from 'react'
import './Results.css';

function Results({data}) {
  return (
    <div className="Results">
      <div className="mainTemp">
        <img 
          className="mainTemp__icon"
          // src={`https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`} // fetching icon image from weatherbit site
          src={require(`./icons/${data[0].weather.icon}.png`)} // fetching icon image locally
          alt={`Weather Icon - ${data[0].weather.description}`}/>
        <p className="mainTemp__temp">
          <span>{data[0].temp}</span><span>&#8451;</span>
        </p>
      </div>
      
      <h2>{data[0].city_name}, {data[0].country_code}</h2>
      <p>{data[0].weather.description}</p>
      <p>feels like: <span>{data[0].app_temp}</span><span>&#8451;</span></p>
      <p>clouds: <span>{data[0].clouds}</span>%</p>
      <p>hum: <span>{data[0].rh}</span>%</p>
      <p>wind: 
        <span>{Math.round(data[0].wind_spd * 1.852)}</span> km/h, <span>{data[0].wind_cdir}</span> {/* // check for units!!! */}

        {/* <svg 
          className="wind-direction"
          // width="135" 
          // height="170" 
          viewBox="0 0 135 170" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <path 
            className="wind-arrow"
            d="M0 170L68.5 0L135 170L68.5 117.692L0 170Z" 
            transform={`rotate(${data[0].wind_dir + 180},0,0)`}/>
        </svg> */}

      </p>

    </div>
  )
}

export default Results;
