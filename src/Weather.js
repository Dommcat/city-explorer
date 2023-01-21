import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        <h3>Daily Weather</h3>
        {this.props.weatherdata.map(day=>{
          return(
            <>
            <WeatherDay day = {day}/>
            </>
          )
        })}
      </>
    )
  }
}

export default Weather;