import React, { Component } from "react";
// import "./App.css";

import Search    from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import app__mainLogo from "./components/app__mainLogo";



import storm from "./img/weather-icons/storm.svg";





// import styles from './App.css';


// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";









// import "./App.test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hisham"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
    

      <div className="app">


        <Search/>
        {/* <app__mainLogo/> */}

     <div className="app__mainLogo">   
     <img src={storm} alt="storm icon"/>
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


        <CurrentWeather/>



      </div>
    );
  }
}

export default App;