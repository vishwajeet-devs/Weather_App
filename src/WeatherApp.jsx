import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feelsLike: 25.53,
    temp: 24.92, 
    tempMin: 24.92,
    tempMax: 24.92,
    humidity: 79,
    weather: "light rain",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
