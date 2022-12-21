import React, { Component } from "react";
import "../App.css";

import storm from "../img/weather-icons/storm.svg";







class app__mainLogo extends React.Component
{



    render(){
        return(

         <div className="app__mainLogo">
          
                 <img src={storm} alt="storm icon"/>
            
                  <svg
                    id="weather-icon-mostlycloudy"
                    class="weather-icon weather-icon-white mostlycloudy"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64">

                    <g id="mostlycloudy">
                      <path
                        class="st0"
                        d="M43.1 13.9c-.7 0-1.2-.6-1.2-1.2V9.2c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v3.4c0 .7-.5 1.3-1.2 1.3zM57.6 25h-3.4c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h3.4c.7 0 1.2.5 1.2 1.2.1.7-.5 1.2-1.2 1.2zM51.3 17.1c-.3 0-.6-.1-.9-.4-.5-.5-.5-1.3 0-1.7l2.4-2.4c.5-.5 1.3-.5 1.7 0 .5.5.5 1.3 0 1.7l-2.4 2.4c-.1.3-.5.4-.8.4zM53.7 35.4c-.3 0-.6-.1-.9-.4l-2.4-2.4c-.5-.5-.5-1.3 0-1.7.5-.5 1.3-.5 1.7 0l2.4 2.4c.5.5.5 1.3 0 1.7-.1.3-.5.4-.8.4zM35.3 17.2c-.3 0-.6-.1-.9-.4L32 14.5c-.5-.5-.5-1.3 0-1.7.5-.5 1.3-.5 1.7 0l2.4 2.4c.5.5.5 1.3 0 1.7-.2.2-.5.3-.8.3z"
                      />
                      <path
                        class="st1"
                        d="M45.6 57.8H16c-5.1 0-9.3-4.2-9.3-9.3 0-4 2.6-7.6 6.3-8.8v-.2c0-4.7 3.8-8.5 8.5-8.5 1.1 0 2.2.2 3.2.7 2.2-3.4 6-5.4 10.1-5.4 6.7 0 12.2 5.5 12.2 12.2 0 .7-.1 1.4-.2 2.1 4.2.6 7.5 4.2 7.5 8.6-.1 4.7-3.9 8.6-8.7 8.6zM21.4 33.7c-3.2 0-5.8 2.6-5.8 5.8 0 .3 0 .6.1 1l.2 1.3-1.3.2c-3.1.6-5.3 3.4-5.3 6.5 0 3.7 3 6.7 6.7 6.7h29.6c3.3 0 6-2.7 6-6s-2.7-6-6-6h-.3l-2 .1.6-1.9c.3-.9.5-1.9.5-2.9 0-5.3-4.3-9.5-9.5-9.5-3.5 0-6.8 2-8.4 5.1l-.7 1.3-1.2-.7c-1-.8-2.1-1-3.2-1z"
                      />
                      <path
                        class="st0"
                        d="M44.6 16c-4.2-.8-8.2 2-8.9 6.2-.1.4-.1.7-.1 1.1-.1.5.3 1 .9 1.1 1.1.1 1-1 1.2-1.7.6-3.1 3.5-5.1 6.6-4.6 3.1.6 5.1 3.5 4.6 6.6-.1.7-.3 1.4-.7 2-.5.7-1.3 1.3-2 1.8-.6.4-.3 1.3.4 1.4.8.2 1.5-.4 2.1-1 .7-.6 1.3-1.5 1.7-2.4.2-.5.4-1 .5-1.5.7-4.3-2.1-8.3-6.3-9z"
                      />
                    </g>
                  </svg>



            <h3>Overcast clouds</h3>

            <h2>
            Temperature <span> 10 &deg; to 11 &deg; C</span>
            </h2>

            <h4>
            <strong>Humidity</strong> <span> 78% </span>
            <strong>Pressure</strong>
            <span> 1008.48</span>
            </h4>
      </div>



        );

    }
}





export default themainLogo;
