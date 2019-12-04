import React from 'react';
import './Forecast.css';

function Forecast({data, ready, getWeekday}) {
  return (
    <div className="Forecast">
      
      { 
        ready ? // if forecast data is available, proceed...
        data.map( day => {
          return (                // maybe turn this into a Card comp...
            <div className="day" key={day.ts}>
              <div className="day__weekday">
                <h3>{getWeekday(day.ts)}</h3>
                <h5>{day.datetime}</h5>
              </div>
              
              <div className="day__weatherCond">
                <img 
                  src={require(`./icons/${day.weather.icon}.png`)} // fetching icon image locally
                  alt="weather icon"
                />
                <p>{day.weather.description}</p>
              </div>
              
              <div className="day__minmax">
                <div className="day__minmax__min">
                  <svg viewBox="0 0 106 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53 104.5L106 0L9.13568e-06 -9.26681e-06L53 104.5Z" fill="#4E5FF7"/>
                  </svg>
                  <span className="tempMin">{day.min_temp}</span>
                </div>

                <div className="day__minmax__max">
                  <span className="tempMax">{day.max_temp}</span>
                  <svg viewBox="0 0 106 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53 0L0 104.5H106L53 0Z" fill="#F74E4E"/>
                  </svg>

                </div>
              </div>
              


            </div>
          )
        }) 
        : null 
      }

    </div>
  )
}

export default Forecast
