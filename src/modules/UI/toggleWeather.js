export default function toggleWeather(weatherElement) {
  if (weatherElement.classList.contains('weather-open')) {
    weatherElement.classList.remove('weather-open');
    weatherElement.classList.add('weather-close');
    setTimeout(() => {document.querySelector('form').classList.remove('no-bottom-round')}, 200);
  } else {
    weatherElement.classList.remove('weather-close');
    weatherElement.classList.add('weather-open');
    document.querySelector('form').classList.add('no-bottom-round');
  }
}