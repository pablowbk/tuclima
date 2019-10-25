import React from 'react'
import './LoaderRain.css'

function LoaderRain() {
  return (
    <svg className="LoaderRain" viewBox="0 0 577 575" fill="none" xmlns="http://www.w3.org/2000/svg">

          <path className="drop falling-center"
            d="M239.233 521.774C247.146 497.605 256.718 488.601 276.715 452.603C291.888 493.044 313.086 516.573 291.338 551.25C276.22 575.354 230.659 563.014 239.233 521.774Z" fill="#85B6FF" stroke="black" strokeWidth="10"/>
          <path className="drop falling-right"
            d="M354.233 460.774C362.146 436.605 371.718 427.601 391.715 391.603C406.888 432.044 428.086 455.573 406.338 490.25C391.22 514.354 345.659 502.014 354.233 460.774Z" fill="#85B6FF" stroke="black" strokeWidth="10"/>
          <path className="drop falling-right"
            d="M122.307 473.524C130.3 449.11 139.969 440.014 160.169 403.65C175.498 444.503 196.911 468.27 174.941 503.3C159.669 527.65 113.646 515.184 122.307 473.524Z" fill="#85B6FF" stroke="black" strokeWidth="10"/>
          
          <path className="cloud behind"
            d="M353.517 46.4299C377.689 -24.9492 538.959 15.427 503.963 108.076C552.308 90.772 638.535 207.574 455.133 225L270.412 225H270.086C226.909 225 185.493 225.001 189.236 168.041C192.988 110.937 237.673 126.855 259.055 133.722C191.548 54.4829 321.407 -5.84269 353.517 46.4299Z" fill="#0044FF" stroke="black" strokeWidth="20"/>
          <path className="cloud"
            d="M459.086 353.99H74.1679C-9.75887 353.99 -22.1661 213.774 102.525 220.99C-4.47475 103.991 227.525 -46.0095 315.525 103.991C392.525 49.9905 465.086 136.944 419.525 199.991C554.525 136.944 583.777 353.99 459.086 353.99Z" fill="#0044FF" stroke="black" strokeWidth="20"/>
    </svg>
  )
}

export default LoaderRain
