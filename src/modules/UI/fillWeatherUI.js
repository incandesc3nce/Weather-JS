import { format } from "date-fns";

export default function fillWeatherUI(weatherToday, weatherForecast) {
  const conditionIcon = document.querySelector(".condition .icon");
  conditionIcon.src = `http:${weatherToday.icon}`;
  const conditionText = document.querySelector(".condition .text");
  conditionText.textContent = weatherToday.condition;

  const actualTemp = document.querySelector(".actual-temp");
  actualTemp.textContent = `${Math.round(weatherToday.temp_c)}°C`;

  const feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = `${Math.round(weatherToday.feelslike_c)}°C`;

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = `${weatherToday.wind_kph} km/h`;

  const windDirection = document.querySelector(".wind-degree");
  windDirection.textContent = `${weatherToday.wind_degree}° (${weatherToday.wind_dir})`;

  const cloudValue = document.querySelector(".cloud-value");
  cloudValue.textContent = `${weatherToday.cloud}%`;

  const humidityValue = document.querySelector(".humidity-value");
  humidityValue.textContent = `${weatherToday.humidity}%`;

  const rainValue = document.querySelector(".rain-value");
  rainValue.textContent = `${weatherForecast[0].chance_of_rain}%`;

  const snowValue = document.querySelector(".snow-value");
  snowValue.textContent = `${weatherForecast[0].chance_of_snow}%`;

  const sunriseValue = document.querySelector(".sunrise-value");
  sunriseValue.textContent = weatherForecast[0].sunrise;

  const sunsetValue = document.querySelector(".sunset-value");
  sunsetValue.textContent = weatherForecast[0].sunset;

  const forecasts = document.querySelectorAll(".forecast");
  forecasts.forEach((forecast, i) => {
    if (i > 0) {
      const forecastDay = format(new Date(weatherForecast[i].date), "eee");
      forecast.querySelector(".forecast-day").textContent = forecastDay;
    } else {
      forecast.querySelector(".forecast-day").textContent = "Today";
    }

    const forecastIcon = forecast.querySelector(".forecast-icon");
    forecastIcon.src = `http:${weatherForecast[i].icon}`;

    const forecastPrecipation = forecast.querySelector(".forecast-precipation");
    forecastPrecipation.textContent = `${weatherForecast[i].chance_of_rain}%`;

    const forecastMinTemp = forecast.querySelector(".min-temp");
    forecastMinTemp.textContent = `${Math.round(weatherForecast[i].mintemp_c)}°C`;

    const forecastMaxTemp = forecast.querySelector(".max-temp");
    forecastMaxTemp.textContent = `${Math.round(weatherForecast[i].maxtemp_c)}°C`;
  });
}
