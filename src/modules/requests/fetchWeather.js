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
    alert(
      "City not found. Please check your spelling and internet connection and try again.",
    );
  }
}
