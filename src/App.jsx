import { useState } from 'react';
import SearchBox from './SearchBox.jsx';
import WeatherInfo from './WeatherInfo.jsx';
import './App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const [weather,setWeather] = useState({
    cityName : "Delhi",
    temp : 25,
    tempmin : 23,
    tempmax : 28,
    humidity : 22});
const updateWeather = (obj)=>
{
    setWeather(obj);
}

 let bg = weather.temp>30?"hot":weather.temp>20?"nice":"cold";
  return (
    <div id="appContainer" className={bg}>
      <header><h1>Weather Cast</h1></header>
      <div id="container">
      <SearchBox sendObj={updateWeather}/>
           <br/>
      <WeatherInfo info={weather}/>
      </div>
      <footer>Developed by :&nbsp;<LinkedInIcon/><a href="https://www.linkedin.com/in/bhanu-prakash7854/">Bhanu Prakash</a></footer>
    </div>
  )
}

export default App
