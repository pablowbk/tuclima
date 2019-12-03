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
          alt = ""/>
        {/* <svg viewBox="0 0 229 236" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M191.079 134.456H30.7308C-4.23108 134.456 -9.39963 76.045 42.5438 79.0513C-2.02984 30.3119 94.6159 -32.1746 131.275 30.3119C163.351 7.81673 193.578 44.0393 174.599 70.3032C230.836 44.0393 243.022 134.456 191.079 134.456Z"
            fill="#B7B7B7" stroke="#333333" stroke-width="8" />
          <path
            d="M42.08 185.942C45.9127 172.926 48.0375 168.235 54.6099 149.045C51.1855 171.503 50.4945 184.865 43.9017 203.292C39.319 216.101 36.0583 208.27 42.08 185.942Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M53.8573 208.141C57.69 195.125 59.8148 190.434 66.3872 171.244C62.9629 193.703 62.2718 207.065 55.6791 225.491C51.0963 238.3 47.8357 230.469 53.8573 208.141Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M87.4125 208.141C91.2452 195.125 93.37 190.434 99.9424 171.244C96.518 193.703 95.827 207.065 89.2342 225.491C84.6515 238.3 81.3908 230.469 87.4125 208.141Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M75.6352 185.942C79.4679 172.926 81.5927 168.235 88.165 149.045C84.7407 171.503 84.0496 184.865 77.4569 203.292C72.8741 216.101 69.6135 208.27 75.6352 185.942Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M109.08 185.942C112.913 172.926 115.037 168.235 121.61 149.045C118.186 171.503 117.494 184.865 110.902 203.292C106.319 216.101 103.058 208.27 109.08 185.942Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M120.857 208.141C124.69 195.125 126.815 190.434 133.387 171.244C129.963 193.703 129.272 207.065 122.679 225.491C118.096 238.3 114.836 230.469 120.857 208.141Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M154.412 208.141C158.245 195.125 160.37 190.434 166.942 171.244C163.518 193.703 162.827 207.065 156.234 225.491C151.651 238.3 148.391 230.469 154.412 208.141Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M142.635 185.942C146.467 172.926 148.592 168.235 155.165 149.045C151.74 171.503 151.049 184.865 144.456 203.292C139.874 216.101 136.613 208.27 142.635 185.942Z"
            fill="#85B6FF" stroke="#85B6FF" />
          <path
            d="M176.19 189.642C180.023 176.625 182.147 171.934 188.72 152.744C185.295 175.203 184.604 188.565 178.012 206.992C173.429 219.801 170.168 211.969 176.19 189.642Z"
            fill="#85B6FF" stroke="#85B6FF" />
        </svg> */}
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
