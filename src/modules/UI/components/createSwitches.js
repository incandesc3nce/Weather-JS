export default function createSwitches() {
  const switches = document.createElement("div");
  switches.classList.add("switches");

  const windUnit = document.createElement("div");
  windUnit.classList.add("wind-unit");
  const kph = document.createElement("div");
  kph.classList.add("kph");
  kph.classList.add("selected-unit");
  kph.textContent = "km/h";
  const mph = document.createElement("div");
  mph.classList.add("mph");
  mph.textContent = "mi/h";

  const tempUnit = document.createElement("div");
  tempUnit.classList.add("temp-unit");
  const celsius = document.createElement("div");
  celsius.classList.add("celsius");
  celsius.classList.add("selected-unit");
  celsius.textContent = "°C";
  const fahrenheit = document.createElement("div");
  fahrenheit.classList.add("fahrenheit");
  fahrenheit.textContent = "°F";

  switches.appendChild(windUnit);
  switches.appendChild(tempUnit);

  windUnit.appendChild(kph);
  windUnit.appendChild(mph);
  tempUnit.appendChild(celsius);
  tempUnit.appendChild(fahrenheit);

  return switches;
}
