import React from 'react'

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
    </div>
  )
}

export default Results
