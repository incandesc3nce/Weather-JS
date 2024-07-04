export function switchToKph(kph, mph, data) {
  if (!kph.classList.contains("selected-unit")) {
    kph.classList.add("selected-unit");
    mph.classList.remove("selected-unit");

    const windSpeed = document.querySelector(".wind-speed");
    windSpeed.textContent = `${data.wind_kph} km/h`;
  }
}

export function switchToMph(kph, mph, data) {
  if (!mph.classList.contains("selected-unit")) {
    mph.classList.add("selected-unit");
    kph.classList.remove("selected-unit");
    const windSpeed = document.querySelector(".wind-speed");

    windSpeed.textContent = `${data.wind_mph} mph`;
  }
}

export function switchToCelsius(celsius, fahrenheit, today, forecast) {
  if (!celsius.classList.contains("selected-unit")) {
    celsius.classList.add("selected-unit");
    fahrenheit.classList.remove("selected-unit");
    const actualTemp = document.querySelector(".actual-temp");
    const feelsLike = document.querySelector(".feels-like");
    const minTemp = document.querySelectorAll(".min-temp");
    const maxTemp = document.querySelectorAll(".max-temp");

    actualTemp.textContent = `${Math.round(today.temp_c)}°C`;
    feelsLike.textContent = `${Math.round(today.feelslike_c)}°C`;

    minTemp.forEach((temp, i) => {
      temp.textContent = `${Math.round(forecast[i].mintemp_c)}°C`;
    });
    maxTemp.forEach((temp, i) => {
      temp.textContent = `${Math.round(forecast[i].maxtemp_c)}°C`;
    });
  }
}

export function switchToFahrenheit(celsius, fahrenheit, today, forecast) {
  if (!fahrenheit.classList.contains("selected-unit")) {
    fahrenheit.classList.add("selected-unit");
    celsius.classList.remove("selected-unit");
    const actualTemp = document.querySelector(".actual-temp");
    const feelsLike = document.querySelector(".feels-like");
    const minTemp = document.querySelectorAll(".min-temp");
    const maxTemp = document.querySelectorAll(".max-temp");

    actualTemp.textContent = `${Math.round(today.temp_f)}°F`;
    feelsLike.textContent = `${Math.round(today.feelslike_f)}°F`;

    minTemp.forEach((temp, i) => {
      temp.textContent = `${Math.round(forecast[i].mintemp_f)}°F`;
    });
    maxTemp.forEach((temp, i) => {
      temp.textContent = `${Math.round(forecast[i].maxtemp_f)}°F`;
    });
  }
}
