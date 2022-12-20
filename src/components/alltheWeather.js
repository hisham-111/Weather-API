import React from "react";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "./Search.css";
class alltheWeather extends React.Component {
    state = {
        input: "",
    };


    render(){


        const imageSrc = (image) => {
            if (image === "clouds") return cloudy;
             if (image === "clear") return clear;
             if (image === "mostlycloudy") return mostlycloudy;
             if (image === "partlycloudy") return partlycloudy;
             if (image === "snow") return snow;
             if (image === "storm") return storm;
             if (image === "rain") return rain;
             if (image === "fog") return fog;
             if (image === "drizzle") return drizzle;
             
        return(

            <p>{this.props.time}</p>

        );
    }

    export default alltheWeather;