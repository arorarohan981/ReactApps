import { Weather_API_Key, Weather_API_URL } from './api';
import './App.css';
import CurrentWeather from './Components/Current-Weather/current-weather';
import Search from './Components/search';
import React from 'react';
import Forecast from './Components/Forecast/forecast';


function App() {

  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [currentForecast, setCurrentForecast] = React.useState(null);
  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherfetch = fetch(`${Weather_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_API_Key}&units=metric`)
    const forecastFetch = fetch(`${Weather_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${Weather_API_Key}&units=metric`)

    Promise.all([currentWeatherfetch, forecastFetch]).then(async (response) => {
      const weatherresponse = await response[0].json();
      const forecastresponse = await response[1].json();
      setCurrentWeather({ city: searchData.label, ...weatherresponse });
      setCurrentForecast({ city: searchData.label, ...forecastresponse });
    }).catch((err) => console.log(err))
  }


  return (
    <div className="conatainer">
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast}/>}
    </div>
  );
}

export default App;
