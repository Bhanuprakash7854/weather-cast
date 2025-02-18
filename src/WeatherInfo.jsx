import './WeatherInfo.css';

export default function WeatherInfo({info}) {
    return (<div id="infoContainer">
            <div id="image"></div>
            <div id="info">
                <h2>{info.cityName}</h2><br></br>
                Temperature = {info.temp.toFixed(2)}&deg;C<br/>
                Min Temperature = {info.tempmin.toFixed(2)}&deg;C<br/>
                Max Temperature = {info.tempmax.toFixed(2)}&deg;C<br/>
                Humidity = {info.humidity}<br/>
            </div>
    </div>);
}