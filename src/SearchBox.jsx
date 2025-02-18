import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {useState,useEffect} from 'react';
import './SearchBox.css';

export default function SearchBox({sendObj}) {
    const [city,setCity] = useState("");
    const [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/geo/1.0/direct?q=";
    const API_KEY = "ddaf04e64d4ea077463e0fcc4252ac0d";
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const handleChange = (event) => {
        setCity(event.target.value);
    }
    const getWeatherDetails = async (lat,lon,currentCity) => {
        try{
            const response = await fetch(`${WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const jsonResponse = await response.json();
        const obj = {
            cityName : currentCity,
            temp : jsonResponse.main.temp-273.15,
            tempmin : jsonResponse.main.temp_min-273.15,
            tempmax : jsonResponse.main.temp_max-273.15,
            humidity : jsonResponse.main.humidity
        }
        setError(false);
      sendObj(obj);
        }
        catch(err)
        {
            setError(true);
        }
    }
    
    const handleSubmit = async (event) => {
       try{
        event.preventDefault();
        let response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        let currentCity = jsonResponse[0].local_names.en;
        console.log(jsonResponse[0].local_names.en);
        getWeatherDetails(jsonResponse[0].lat,jsonResponse[0].lon,currentCity);
       }
       catch(err)
       {
        setError(true);
       }
    }

    useEffect(()=>{getWeatherDetails(28.7041, 77.1025,"Delhi")},[]);
    return (
            <form id="searchbox">
                <input value={city} onChange={handleChange} placeholder='City'/>
                <br />
                <Button variant="contained" size="small" startIcon={<SearchIcon />} type="submit" onClick={handleSubmit}>
                    Search
                </Button>
                {error && <p id="error"><br/>!City not found</p>}
            </form>
    );
}