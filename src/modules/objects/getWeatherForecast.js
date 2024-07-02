export default function getWeatherForecast(forecastDay) {
  return {
    date: forecastDay.date,

    sunrise: forecastDay.astro.sunrise,
    sunset: forecastDay.astro.sunset,

    maxtemp_c: forecastDay.day.maxtemp_c,
    maxtemp_f: forecastDay.day.maxtemp_f,
    mintemp_c: forecastDay.day.mintemp_c,
    mintemp_f: forecastDay.day.mintemp_f,

    chance_of_rain: forecastDay.day.daily_chance_of_rain,
    chance_of_snow: forecastDay.day.daily_chance_of_snow,
  };
}
