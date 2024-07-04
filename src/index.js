import fetchWeather from "./modules/requests/fetchWeather";
import getWeatherToday from "./modules/objects/getWeatherToday";
import getWeatherForecast from "./modules/objects/getWeatherForecast";
import createWeather from "./modules/UI/createWeather";
import fillWeatherUI from "./modules/UI/fillWeatherUI";
import toggleWeather from "./modules/UI/toggleWeather";
import timeoutRemoval from "./modules/weatherRemoval";
import toggleLoading from "./modules/UI/toggleLoading";
import "./style.css";

const apiKey = process.env.API_KEY;

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  toggleLoading();
  if (document.querySelector(".weather")) {
    toggleWeather(document.querySelector(".weather"));
    await timeoutRemoval(document.querySelector(".weather"));
  }
  
  const city = document.querySelector("#city").value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=3&q=${city}`;

  const weatherJSON = await fetchWeather(url);
  const weatherToday = getWeatherToday(weatherJSON.current);
  const weatherForecast = weatherJSON.forecast.forecastday.map((day) =>
    getWeatherForecast(day),
  );

  if (!document.querySelector(".weather")) {
    createWeather();
    toggleWeather(document.querySelector(".weather"));
  }

  fillWeatherUI(weatherToday, weatherForecast);
  toggleLoading();
});
