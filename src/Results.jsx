import React from 'react'
import './Results.css';

function Results({data, imperial, forecastData, forecastReady}) {
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
        <div className="moreInfo__col-1">
          <p className="infoItem">
            <span className="infoItem__unit">{Math.round(data[0].app_temp)}</span><span className="infoItem__unit">{imperial ? "°F" : "°C"}</span>
            <span className="infoItem__label">ST</span>
          </p>
          <p className="infoItem">
            <span className="infoItem__unit">{data[0].clouds}%</span>
            <span className="infoItem__label">Nubosidad</span>
          </p>
          <p className="infoItem">
            <span className="infoItem__unit">{data[0].rh}%</span>
            <span className="infoItem__label">Humedad</span>
          </p>
        </div>

        <div className="moreInfo__col-2">
          <p className="infoItem">
            <span className="infoItem__unit">{Math.round(data[0].wind_spd * 3.6)}</span> km/h, <span className="infoItem__unit">{data[0].wind_cdir}</span> {/* // check for units!!! */}
            <span className="infoItem__label">Viento</span>
          </p>
          <p className="infoItem">
            <span className="infoItem__unit">{parseInt(data[0].uv)}</span>
            <span className="infoItem__label">Indice UV</span> 
          </p>
          <p className="infoItem">
            <span className="infoItem__unit">{forecastReady ? forecastData[0].pop : null}%</span>
            <span className="infoItem__label">Precip.</span> 
          </p>
        </div>
      </div>

      {/* <button className="More" 
              onClick={
                (e) => {
                  // e.preventDefault();
                  const forecast = document.querySelector('.Forecast');
                  forecast.classList.toggle('outtasight');
                  console.log("click");
                }
              }>
        <svg className="More__btn" viewBox="0 0 485 485" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="242.5" cy="242.5" r="242.5"/>
          <g className="MoreSvgLine">
            <rect x="221" y="362" width="240" height="43" rx="10" transform="rotate(-90 221 362)" fill="white"/>
            <rect x="362.5" y="263.5" width="240" height="43" rx="10" transform="rotate(-180 362.5 263.5)" fill="white"/>
          </g>
        </svg>
      </button> */}


    </div>
  )
}

export default Results;
