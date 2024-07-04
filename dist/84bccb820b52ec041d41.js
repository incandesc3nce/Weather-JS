import fetchWeather from './modules/requests/fetchWeather';
import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});
import './style.css';
var apiKey = process.env.API_KEY;
var url = "https://api.weatherapi.com/v1/forecast.json?key=".concat(apiKey, "&q=london");
console.log(fetchWeather(url));