export default async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(response.statusText);
    }
  } catch (err) {
    console.log(err);
  }
}
