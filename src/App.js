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


        <Search> </Search>
        {/* start the app__mainLogo */}

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
        {/* end the app__mainLogo */}

         <CurrentWeather> </CurrentWeather>



    <themainWeather
     Data={FakeWeather}
    img={FakeWeather.list[4].weather[0].main.toLowerCase()}>


    </themainWeather>


  <section className="allday">
    <alltheWeather
        time={FakeWeather.list[5].dt_txt.slice(11, 16)}
        temp={(FakeWeather.list[5].main.temp - 273.15).toFixed()}>

          
         </alltheWeather>




         <alltheWeather
        time={FakeWeather.list[6].dt_txt.slice(11, 16)}
        temp={(
            FakeWeather.list[6].main.temp - 273.15
        ).toFixed()}
        ></alltheWeather>





        <alltheWeather
                time={FakeWeather.list[7].dt_txt.slice(11, 16)}
                temp={(
                    FakeWeather.list[7].main.temp - 273.15
                ).toFixed()}
            ></alltheWeather>


          <alltheWeather
              time={FakeWeather.list[8].dt_txt.slice(11, 16)}
              temp={(
                  FakeWeather.list[8].main.temp - 273.15
              ).toFixed()}
          ></alltheWeather>

        <alltheWeather
                time={FakeWeather.list[1].dt_txt.slice(11, 16)}
                temp={(
                    FakeWeather.list[1].main.temp - 273.15
                ).toFixed()}
            ></alltheWeather>

    <alltheWeather
        time={FakeWeather.list[2].dt_txt.slice(11, 16)}
        temp={(
            FakeWeather.list[2].main.temp - 273.15
        ).toFixed()}
    ></alltheWeather>
</section>



   
 


     <alltheWeather
        time={FakeWeather.list[3].dt_txt.slice(11, 16)}
        img={FakeWeather.list[3].weather[0].main.toLowerCase()}
        temp={(
            FakeWeather.list[3].main.temp - 273.15
        ).toFixed()}
    ></alltheWeather>

                  
   
 



      </div>



 

   
    );


    }
  }
    
export default App;