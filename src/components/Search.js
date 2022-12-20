import React, { Component } from "react";
import "../App.css";

// import styles from './App.css';





import clear from "../img/weather-icons/clear.svg";




class Search extends React.Component {
  // state = {
  //   input: ""
  // };

  // render() {
  //   return (
      // <div>
      //   {this.state.input}
      //   <input
      //     type="text"
      //     id="input-name"
      //     onChange={event => {
      //       this.setState({ input: event.target.value });
      //     }}
      //   />
      //   <button
      //     onClick={event => {
      //       this.props.handleInput(this.state.input);
      //     }}
      //   >
      //     Say Hello
      //   </button>


    

    // );


//   }
// }

state = {
  input: "",
};


render(){
  return(

   

    <div className="App__search">
        <input type="text" id="input-name"  placeholder="Type the city name"  className="searchInput"/>
        <button className="buttonSearch"> FIND WEATHER </button>
    </div>
  );
}
}

export default Search;
