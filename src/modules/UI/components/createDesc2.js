export default function createDesc2() {
  const desc2 = document.createElement("div");
  desc2.classList.add("desc-2");

  const precipation = document.createElement("div");
  precipation.classList.add("precipation");

  const rain = document.createElement("div");
  rain.classList.add("rain");

  const rainIcon = document.createElement("img");
  rainIcon.classList.add("desc-icon", "svg-white");
  rainIcon.setAttribute("alt", "Rain");
  const rainValue = document.createElement("span");
  rainValue.classList.add("rain-value");

  const snow = document.createElement("div");
  snow.classList.add("snow");

  const snowIcon = document.createElement("img");
  snowIcon.classList.add("desc-icon", "svg-white");
  snowIcon.setAttribute("alt", "Snow");
  const snowValue = document.createElement("span");
  snowValue.classList.add("snow-value");

  rain.appendChild(rainIcon);
  rain.appendChild(rainValue);
  snow.appendChild(snowIcon);
  snow.appendChild(snowValue);

  precipation.appendChild(rain);
  precipation.appendChild(snow);

  const sun = document.createElement("div");
  sun.classList.add("sun");

  const sunrise = document.createElement("div");
  sunrise.classList.add("sunrise");

  const sunriseIcon = document.createElement("img");
  sunriseIcon.classList.add("desc-icon", "svg-white");
  sunriseIcon.setAttribute("alt", "Sunrise");
  const sunriseValue = document.createElement("span");
  sunriseValue.classList.add("sunrise-value");

  const sunset = document.createElement("div");
  sunset.classList.add("sunset");

  const sunsetIcon = document.createElement("img");
  sunsetIcon.classList.add("desc-icon", "svg-white");
  sunsetIcon.setAttribute("alt", "Sunset");
  const sunsetValue = document.createElement("span");
  sunsetValue.classList.add("sunset-value");

  sunrise.appendChild(sunriseValue);
  sunrise.appendChild(sunriseIcon);
  sunset.appendChild(sunsetValue);
  sunset.appendChild(sunsetIcon);

  sun.appendChild(sunrise);
  sun.appendChild(sunset);

  desc2.appendChild(precipation);
  desc2.appendChild(sun);

  return desc2;
}
