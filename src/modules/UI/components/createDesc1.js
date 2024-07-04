export default function createDesc1() {
  const desc1 = document.createElement("div");
  desc1.classList.add("desc-1");

  const wind = document.createElement("div");
  wind.classList.add("wind");

  const speed = document.createElement("div");
  speed.classList.add("speed");

  const speedIcon = document.createElement("img");
  speedIcon.classList.add("desc-icon", "svg-white");
  speedIcon.setAttribute("alt", "Wind speed");

  const speedValue = document.createElement("span");
  speedValue.classList.add("wind-speed");

  const direction = document.createElement("div");
  direction.classList.add("direction");

  const directionIcon = document.createElement("img");
  directionIcon.classList.add("desc-icon", "svg-white");
  directionIcon.setAttribute("alt", "Wind direction");

  const directionValue = document.createElement("span");
  directionValue.classList.add("wind-degree");

  speed.appendChild(speedIcon);
  speed.appendChild(speedValue);
  direction.appendChild(directionIcon);
  direction.appendChild(directionValue);
  wind.appendChild(speed);
  wind.appendChild(direction);

  const misc = document.createElement("div");
  misc.classList.add("misc");

  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  const cloudValue = document.createElement("span");
  cloudValue.classList.add("cloud-value");

  const cloudIcon = document.createElement("img");
  cloudIcon.classList.add("desc-icon", "svg-white");
  cloudIcon.setAttribute("alt", "Cloud");

  cloud.appendChild(cloudValue);
  cloud.appendChild(cloudIcon);
  misc.appendChild(cloud);

  const humidity = document.createElement("div");
  humidity.classList.add("humidity");

  const humidityValue = document.createElement("span");
  humidityValue.classList.add("humidity-value");

  const humidityIcon = document.createElement("img");
  humidityIcon.classList.add("desc-icon", "svg-white");
  humidityIcon.setAttribute("alt", "Humidity");

  humidity.appendChild(humidityValue);
  humidity.appendChild(humidityIcon);
  misc.appendChild(humidity);

  desc1.appendChild(wind);
  desc1.appendChild(misc);

  return desc1;
}
