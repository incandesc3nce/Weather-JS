import createSwitches from "./components/createSwitches";
import createSummary from "./components/createSummary";
import createDesc1 from "./components/createDesc1";
import createDesc2 from "./components/createDesc2";
import createForecasts from "./components/createForecasts";

export default function createWeather() {
  const form = document.querySelector('form');
  form.classList.add('no-bottom-round');

  const content = document.querySelector("#content");

  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather");

  const switches = createSwitches();
  const summary = createSummary();
  const desc1 = createDesc1();
  const desc2 = createDesc2();
  const forecasts = createForecasts();

  weatherContainer.appendChild(switches);
  weatherContainer.appendChild(summary);
  weatherContainer.appendChild(desc1);
  weatherContainer.appendChild(desc2);
  weatherContainer.appendChild(forecasts);

  content.appendChild(weatherContainer);
}
