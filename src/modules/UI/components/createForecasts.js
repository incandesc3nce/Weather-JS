export default function createForecasts(amountOfDays = 3) {
  const forecasts = document.createElement("div");
  forecasts.classList.add("forecasts");

  for (let i = 0; i < amountOfDays; i++) {
    const forecast = document.createElement("div");
    forecast.classList.add("forecast");

    const forecastDay = document.createElement("div");
    forecastDay.classList.add("forecast-day");

    const forecastIcon = document.createElement("img");
    forecastIcon.classList.add("forecast-icon");
    const forecastPrecipation = document.createElement("div");
    forecastPrecipation.classList.add("forecast-precipation");
    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp");
    const maxTemp = document.createElement("div");
    maxTemp.classList.add("max-temp");

    forecast.appendChild(forecastDay);
    forecast.appendChild(forecastIcon);
    forecast.appendChild(forecastPrecipation);
    forecast.appendChild(minTemp);
    forecast.appendChild(maxTemp);
    forecasts.appendChild(forecast);
  }

  return forecasts;
}
