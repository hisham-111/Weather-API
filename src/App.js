import React, { Component } from "react";
// import "./App.css";

import Search    from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import FakeWeather from "./Data/FakeWeather.json";




import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";





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
     <img src={mostlycloudy} alt="storm icon"/>
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




                    <themainWeather
                        Data={FakeWeather}
                        p={FakeWeather.list[4].weather[0].main.toLowerCase()}
                    ></themainWeather>
  }
}

export default App;