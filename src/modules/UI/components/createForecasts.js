export default function createForecasts(amountOfDays = 3) {
  const forecasts = document.createElement("div");
  forecasts.classList.add("forecasts");

  for (let i = 0; i < amountOfDays; i++) {
    const forecast = document.createElement("div");
    forecast.classList.add("forecast");

    const forecastDay = document.createElement("div");
    forecastDay.classList.add("forecast-day");

    const forecastDate = document.createElement("div");
    forecastDate.classList.add("forecast-date");
    const forecastIcon = document.createElement("img");
    forecastIcon.classList.add("forecast-icon");
    const forecastPrecipation = document.createElement("div");
    forecastPrecipation.classList.add("forecast-precipation");

    forecast.appendChild(forecastDay);
    forecastDay.appendChild(forecastDate);
    forecastDay.appendChild(forecastIcon);
    forecastDay.appendChild(forecastPrecipation);
    forecasts.appendChild(forecast);
  }

  return forecasts;
}
