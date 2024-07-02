export default function getWeatherToday(current) {
  return {
    temp_c: current.temp_c,
    feelslike_c: current.feelslike_c,
    temp_f: current.temp_f,
    feelslike_f: current.feelslike_f,

    wind_kph: current.wind_kph,
    wind_mph: current.wind_mph,
    wind_degree: current.wind_degree,
    wind_dir: current.wind_dir,

    humidity: current.humidity,

    cloud: current.cloud,

    condition: current.condition,

    is_day: current.is_day === 1 ? true : false,
  };
}
