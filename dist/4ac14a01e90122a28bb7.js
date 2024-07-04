import fetchWeather from './modules/requests/fetchWeather';
import './style.css';
var apiKey = process.env.API_KEY;
var url = "https://api.weatherapi.com/v1/forecast.json?key=".concat(apiKey, "&q=london");
console.log(fetchWeather(url));